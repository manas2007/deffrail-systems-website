import styles from "./servicesHeroSectionStyles.module.css";

const ServiceHeroSection = (props) => {

  const { SERVICES_DATA } = props;

  return (
    <section className={styles.serviceHeroSectionParent}>

      <img
        src={SERVICES_DATA.hero.image}
        alt="Lightweight FRP product"
        className={styles.serviceHeroBackgroundImage}
        width={1920}
        height={1080}
      />

      <div className={styles.serviceHeroGradientOverlay} />

      <div className={styles.serviceHeroBottomOverlay} />

      <div className={styles.serviceHeroContentContainer}>

        <div className={styles.serviceHeroContentWrapper}>

          <h1 className={styles.serviceHeroHeading}>
            {SERVICES_DATA.hero.heading}
          </h1>

          <p className={styles.serviceHeroDescription}>
            {SERVICES_DATA.hero.supportingText}
          </p>

        </div>

      </div>

    </section>
  );
};

export default ServiceHeroSection;