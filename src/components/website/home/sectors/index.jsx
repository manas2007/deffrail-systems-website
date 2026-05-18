import styles from "./sectorStyle.module.css";

const sectors = [
  { icon: "/file.svg", label: "Residential Society Projects" },
  { icon: "/file.svg", label: "Hotels & Hospitality Projects" },
  { icon: "/file.svg", label: "Industrial Manufacturing Units" },
  { icon: "/file.svg", label: "Government & Municipal Projects" },
  { icon: "/file.svg", label: "Railways & Defence Infrastructure" },
  { icon: "/file.svg", label: "Warehousing Projects" },
];

export const Sectors = () => (
  <section
    id="sectors"
    className={styles.sectorsParent}
  >
    <div className={styles.sectorsWrapper}>
      <div className={styles.sectorsContainer}>

        {/* Left Content */}
        <div className={styles.sectorsContentWrapper}>

          <p className={styles.sectorsTag}>
            SECTORS
          </p>

          <h2 className={styles.sectorsHeading}>
            Engineered for Real-World applications
          </h2>

        </div>

        {/* Right Content */}
        <div className={styles.sectorsGridWrapper}>

          {sectors.map((sector) => (
            <div
              key={sector.label}
              className={styles.sectorsCard}
            >

              <p className={styles.sectorsCardText}>
                {sector.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>

  </section>
);