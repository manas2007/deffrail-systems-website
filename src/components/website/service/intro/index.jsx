import styles from "./introStyles.module.css";

const Intro = (props) => {

  const { SERVICES_DATA } = props;

  return (
    <section className={styles.introParent}>

      <div className={styles.introWrapper}>

        <h2 className={styles.introHeading}>
          {SERVICES_DATA.intro.heading}
        </h2>

        <div className={styles.introContentWrapper}>

          {SERVICES_DATA.intro.content.map((card, index) => (
            <p
              key={index}
              className={styles.introDescription}
            >
              {card}
            </p>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Intro;