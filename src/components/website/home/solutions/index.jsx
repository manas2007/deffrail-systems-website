import { Button } from "@mui/material";
import styles from "./solutionStyles.module.css";
import DButton from "../../global/dButton";

const items = [
  {
    img: "/assets/home/S-1.png",
    title: "Water Management",
    desc: "Advanced FRP water storage solutions designed for durability, temperature stability and longevity.",
  },
  {
    img: "/assets/home/S-2.png",
    title: "Sewage Management",
    desc: "Engineered sewage treatment systems that efficiently process and recycle wastewater.",
  },
  {
    img: "/assets/home/S-3.png",
    title: "Lightweight Solutions",
    desc: "Innovative rotomoulded products that are strong, lightweight, and easy to install on site.",
  },
  {
    img: "/assets/home/S-4.png",
    title: "Warehousing & Storage",
    desc: "Robust storage systems built using high-strength composites for industrial use.",
  },
  {
    img: "/assets/home/S-5.png",
    title: "Sanitary Management",
    desc: "Hygienic and ready-to-use sanitation solutions including mobile toilets and septic units.",
  },
  {
    img: "/assets/home/S-6.png",
    title: "High Altitude Shelters",
    desc: "Designed to withstand harsh terrains and extreme weather while remaining lightweight.",
  },
];

export const Solutions = (props) => {

  const { handleContactUs } = props;

  return (<section
    id="solutions"
    className={styles.solutionsParent}
  >

    <div className={styles.solutionsWrapper}>

      <div className={styles.solutionsContentWrapper}>

        <span className={styles.solutionsTag}>
          Our Expertise
        </span>

        <h2 className={styles.solutionsHeading}>
          Engineered FRP Solutions for Static & Dynamic Infrastructure
        </h2>

        <p className={styles.solutionsDescription}>
          From water storage and wastewater treatment to biogas and
          custom industrial systems, we deliver lightweight,
          cost-effective FRP solutions built with advanced materials
          for long-term performance.
        </p>

        <div className="mt-[2rem]">
          <DButton
            size="lg"
            className={styles.solutionsButton}
            asChild
            text="Explore All Solutions"
            arrow="true"
            theme="SOLID"
            cta={handleContactUs}
          />
        </div>


      </div>

      <div className={styles.solutionsGridWrapper}>

        {items.map((item) => (
          <article
            key={item.title}
            className={styles.solutionsCard}
          >

            <div className={styles.solutionsImageWrapper}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                width={800}
                height={600}
                className={styles.solutionsImage}
              />
            </div>

            <div className={styles.solutionsCardContent}>

              <p className={styles.solutionsCardHeading}>
                {item.title}
              </p>

              <p className={styles.solutionsCardDescription}>
                {item.desc}
              </p>

              <div className="mt-[1rem]">
                <DButton text="Explore More" arrow="true" cta={handleContactUs} />
              </div>

            </div>

          </article>
        ))}

      </div>

    </div>

  </section>
  )
}