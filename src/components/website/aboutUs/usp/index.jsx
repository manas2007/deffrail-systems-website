import styles from "./uspStyles.module.css";

const USP = () => {

  return (
    <section className={styles.uspParent}>

      <div className={styles.uspWrapper}>

        <img
          className={styles.uspImage}
          src="/assets/aboutUs/USP-Img.png"
          alt="Built for Lightweight Performance"
        />

        <div className={styles.uspContentWrapper}>

          <p className={styles.uspTag}>
            OUR USP
          </p>

          <h1 className={styles.uspHeading}>
            Built for Lightweight Performance
          </h1>

          <p className={styles.uspDescription}>
            Weight reduction is central to how we design our systems.
            By optimizing material strength and structure, our composite
            solutions are significantly lighter than conventional
            alternatives while maintaining high durability. This results in
            faster installation, reduced handling effort, and improved
            operational efficiency across applications.
          </p>

          <p className={styles.uspDescription}>
            Our manufacturing capabilities support consistent quality
            and scalable production, ensuring reliable performance
            across projects.
          </p>

        </div>

      </div>

    </section>
  );
};

export default USP;