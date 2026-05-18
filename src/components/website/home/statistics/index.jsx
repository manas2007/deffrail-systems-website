import styles from "./statisticsStyles.module.css";

const stats = [
  { v: "35+", l: "Years of Experience" },
  { v: "75+", l: "Global Projects" },
  { v: "100%", l: "Corrosion Resistant" },
  { v: "40%", l: "Lighter than Steel" },
];

export const Statistics = () => (
  <section className={styles.statisticsParent}>

    <div className={styles.statisticsWrapper}>

      <div className={styles.statisticsContainer}>

        <div className={styles.statisticsContentWrapper}>
          <h3 className={styles.statisticsHeading}>
            Trusted by engineers across industries
          </h3>
        </div>

        <div className={styles.statisticsCardWrapper}>

          {stats.map((stat, index) => (
            <div
              key={index}
              className={styles.statisticsCard}
            >

              <span className={styles.statisticsValue}>
                {stat.v}
              </span>

              <span className={styles.statisticsLabel}>
                {stat.l}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>

  </section>
);