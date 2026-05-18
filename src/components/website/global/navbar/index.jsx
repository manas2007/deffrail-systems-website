import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DButton from "../dButton";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./navbarStyles.module.css";
import LetsTalkModal from "../modal/contactModal";
import { SwipeableDrawer } from "@mui/material";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";

const links = [
  { label: "Home", href: "#home", path: "/" },
  { label: "About", href: "#about", path: "/about-us" },
];


const SERVICES_LIST = [
  "water-management",
  "sewage-management",
  "lightweight-frp-solutions",
  "warehousing-storage-solutions",
  "sanitary-management",
  "high-altitude-shelters",
];

export const Navbar = () => {

  const router = useRouter();
  const currentPath = router.asPath;
  const isMobile = useCheckMobileScreen();
  const dropdownRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLetsTalkModal, setShowLetsTalkModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const onServiceClick = () => {
    console.log("Hellooo",servicesOpen);
    setServicesOpen(!servicesOpen);
  }

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        // setServicesOpen(false);
      }

    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };

  }, []);

  const handleServiceRedirect = (service) => {
    router.push(`/service/${service}`);

    setOpen(false);
    setServicesOpen(false);
  };

  const onLinkClick = (link) => {
    router.push(link.path)
  }

  const onLogoClick = () => {
    router.push("/");
  }

  const handleContactUs = () => {
    setShowLetsTalkModal(true);
  }


  return (
    <header className={styles.navbarParent}>

      <div className={styles.navbarWrapper}>

        <nav className={styles.navbarContainer}>

          {/* Logo */}
          <img
            onClick={onLogoClick}
            className={styles.navbarLogo}
            src="/assets/home/SVG/Deffrail-Logo-White.svg"
            alt="Deffrail Logo"
          />

          {/* Desktop Links */}
          <div className={styles.navbarLinksWrapper}>

            {links.map((link) => (
              <a
                onClick={() => onLinkClick(link)}
                key={link.label}
                className={styles.navbarLink}
              >
                {link.label}
              </a>
            ))}

            {/* Services Dropdown */}
            <div ref={dropdownRef} className={styles.navbarDropdownParent}>

              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={styles.navbarDropdownButton}
              >
                Services
                <ArrowDropDownIcon
                  className={`${styles.navbarDropdownIcon} ${servicesOpen ? styles.navbarDropdownIconActive : ""
                    }`}
                />
              </button>

              {servicesOpen && (
                <div className={styles.navbarDropdownMenu}>

                  {SERVICES_LIST.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceRedirect(service)}
                      className={styles.navbarDropdownItem}
                    >
                      {service.replaceAll("-", " ")}
                    </button>
                  ))}

                </div>
              )}

            </div>

          </div>

          {/* CTA */}
          <div className={styles.navbarActionWrapper}>

            {isMobile ? <></> : <DButton
              cta={handleContactUs}
              text="Enquire Now"
              theme="SOLID"
            />}


            <button
              onClick={() => setOpen(!open)}
              className={styles.mobileMenuButton}
            >
              {<MenuIcon onClick={() => setShowSidebar(true)} sx={{ color: "white" }} />}
            </button>

          </div>

        </nav>

        {/* Mobile Menu */}


      </div>
      {showLetsTalkModal ? <LetsTalkModal setShowModal={setShowLetsTalkModal} /> : <></>}

      <SwipeableDrawer
        anchor="left"
        sx={{ width: "90%" }}
        open={showSidebar}
        onClose={() => setShowSidebar(false)}
        onOpen={() => setShowSidebar(true)}
      >
        <div className="w-[18rem] bg-[#173f75] h-full text-[white]">
          <div className="p-[1rem]">
            <img className="w-[10rem]" src="/assets/home/SVG/Deffrail-Logo-White.svg" />
          </div>
          {/* Tabs */}
          <div className="flex-col pt-[]">
            {/* Tabs */}
            <div className="flex flex-col">

              {/* Normal Links */}
              {links.map((tab, index) => (
                <h4
                  onClick={() => {
                    onLinkClick(tab);
                    setShowSidebar(false);
                  }}
                  style={{
                    borderLeft: currentPath == tab.path ? "4.5px solid white" : "",
                    color: "white",
                    padding: "0.9rem 1rem",
                    borderBottom: "0.5px solid rgba(255,255,255,0.2)",
                    cursor: "pointer"
                  }}
                  key={`HEADER_TABS_MOBILE_${index + 1}`}
                >
                  {tab.label}
                </h4>
              ))}

              {/* Services Dropdown */}
              <div>

                <div
                  onClick={() => setServicesOpen(!servicesOpen)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "white",
                    padding: "0.9rem 1rem",
                    borderBottom: "0.5px solid rgba(255,255,255,0.2)",
                    cursor: "pointer"
                  }}
                >

                  <h4>Services</h4>

                  <ArrowDropDownIcon
                
                    sx={{
                      transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.3s"
                    }}
                  />

                </div>

                {/* Service Items */}
                {servicesOpen && (

                  <div className="bg-[#0f2f59]">

                    {SERVICES_LIST.map((service, index) => (

                      <p
                        key={`SERVICE_${index + 1}`}
                        onClick={() => {
                          handleServiceRedirect(service);
                          setShowSidebar(false);
                        }}
                        style={{
                          color: "white",
                          padding: "0.8rem 1.5rem",
                          borderBottom: "0.5px solid rgba(255,255,255,0.1)",
                          textTransform: "capitalize",
                          cursor: "pointer"
                        }}
                      >
                        {service.replaceAll("-", " ")}
                      </p>

                    ))}

                  </div>

                )}

              </div>

            </div>
          </div>
        </div>
      </SwipeableDrawer>

    </header>
  );
};