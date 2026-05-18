import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import styles from "./heroSectionStyles.module.css";
import DButton from "../../global/dButton";

export const HeroSection = (props) => {

  const { handleContactUs } = props;

  return (<div className={styles.heroSectionParent}>
    <div id="home" className={styles.heroSectionWrapper}>

      <div className={styles.heroGradientOverlay} />
      <div className={styles.heroBottomOverlay} />

      <div className={styles.heroContentContainer}>

        <div className={styles.heroContentWrapper}>

          <span className={styles.heroTag}>
            <span className={styles.heroTagDot} />
            Future-Grade Technology
          </span>

          <h1 className={styles.heroHeading}>
            Build Lighter.
            <br />
            Perform Better.
            <br />
            Last Longer.
          </h1>

          <p className={styles.heroDescription}>
            Engineered lightweighting solutions for water, wastewater,
            biogas and industrial systems using advanced FRP materials.
          </p>

          <div className={styles.heroButtonWrapper}>

            <DButton cta={handleContactUs} theme="SOLID" text="Explore Solutions" arrow="true" variant="hero" size="lg" asChild />

            <DButton variant="outlineLight" cta={handleContactUs} theme="LIGHT" text="Enquire Now" asChild></DButton>

          </div>

        </div>

      </div>

    </div>
  </div>
  )
};