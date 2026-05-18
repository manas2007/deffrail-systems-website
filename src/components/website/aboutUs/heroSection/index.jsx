import styles from "./aboutHeroSectionStyle.module.css";
import DButton from "../../global/dButton";


const HeroSection = (props) => {

  const { handleContactUs } = props;

  return (
    <section className={styles.aboutHeroSectionParent}>

      <div className={styles.aboutHeroSectionWrapper}>

        <div className={styles.aboutHeroContentWrapper}>

          <p className={styles.aboutHeroTag}>
            FUTURE-GRADE TECHNOLOGY
          </p>

          <h1 className={styles.aboutHeroHeading}>
            Precision Engineered Infrastructure
          </h1>

          <p className={styles.aboutHeroDescription}>
            Precision-engineered FRP and rotational
            moulded solutions for water, wastewater,
            and industrial applications.
          </p>

          <div className={styles.aboutHeroButtonWrapper}>

            <DButton text="Explore Solutions" cta={handleContactUs} arrow="true" theme="SOLID" />

            <DButton text="Enquire Now" cta={handleContactUs} theme="LIGHT" />
 
          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;