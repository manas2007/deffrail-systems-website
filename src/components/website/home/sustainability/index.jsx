import styles from "./sustainabilityStyles.module.css";

const items = [
  {
    icon: "/assets/home/SVG/Water-Reuse.svg",
    title: "Water Reuse Systems",
    desc: "Integrated STP and TTP solutions designed for efficient wastewater treatment and reuse.",
  },
  {
    icon: "/assets/home/SVG/Circular-Energy.svg",
    title: "Circular Energy Solutions",
    desc: "Biogas systems that convert waste into usable energy for household solutions.",
  },
  {
    icon: "/assets/home/SVG/Efficient-Manufacturing.svg",
    title: "Efficient Manufacturing",
    desc: "Advanced composite manufacturing ensures minimal material waste, optimized resource use, and consistent high-performance output.",
  },
];

export const Sustainability = () => (
  <section className={styles.sustainabilityParent}>

    <div className={styles.sustainabilityWrapper}>

      <div className={styles.sustainabilityContainer}>

        {/* Left Section */}
        <div className={styles.sustainabilityImageWrapper}>

          <div className={styles.sustainabilityImageContainer}>
            <img
              src="/assets/home/sustainable.png"
              alt="Sustainable engineering"
              loading="lazy"
              width={900}
              height={1100}
              className={styles.sustainabilityImage}
            />
          </div>

          <div className={styles.sustainabilityImpactCard}>

            <div className={styles.sustainabilityImpactContent}>

              <div className={styles.sustainabilityImpactIconWrapper}>
                <img
                  className={styles.sustainabilityImpactIcon}
                  src="/assets/home/SVG/CO2.svg"
                  alt="CO2 Icon"
                />
              </div>

              <div>

                <p className={styles.sustainabilityImpactSubHeading}>
                  Environmental Impact
                </p>

                <p className={styles.sustainabilityImpactHeading}>
                  Lower lifecycle carbon footprint than concrete
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className={styles.sustainabilityContentWrapper}>

          <span className={styles.sustainabilityTag}>
            Deffrail Eco-Initiative
          </span>

          <h2 className={styles.sustainabilityHeading}>
            Engineering for a Sustainable Future
          </h2>

          <div className={styles.sustainabilityCardsWrapper}>

            {items.map((item) => (
              <div
                key={item.title}
                className={styles.sustainabilityCard}
              >

                <div className={styles.sustainabilityCardIconWrapper}>
                  <img
                    className={styles.sustainabilityCardIcon}
                    src={item.icon}
                    alt={item.title}
                  />
                </div>

                <div>

                  <p className={styles.sustainabilityCardHeading}>
                    {item.title}
                  </p>

                  <p className={styles.sustainabilityCardDescription}>
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>

  </section>
);