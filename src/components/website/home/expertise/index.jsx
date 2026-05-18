import DButton from "../../global/dButton";
import styles from "./expertiseStyles.module.css";

export const Expertise = (props) =>{
  
    const {handleContactUs} = props;
  
  return ( <section
    id="about"
    className={styles.expertiseParent}
  >
    <div className={styles.expertiseWrapper}>

      <div className={styles.expertiseContainer}>

        {/* Left Content */}
        <div className={styles.expertiseContentWrapper}>

          <span className={styles.expertiseTag}>
            Deffrail Solutions
          </span>

          <h2 className={styles.expertiseHeading}>
            Built on 35+ Years of Manufacturing Expertise
          </h2>

          <p className={styles.expertiseDescription}>
            With decades of experience in rotational moulding and advanced
            FRP manufacturing, Deffrail Systems delivers precision-engineered
            solutions using CNC filament winding and high-performance composite
            technologies.
          </p>

          <p className={styles.expertiseDescription}>
            From concept development to large-scale production, every system
            is designed for durability, consistency, and real-world performance.
          </p>

          <div className={styles.expertiseButtonWrapper}>
            <DButton
              cta={handleContactUs}
              text="Explore Our Capabilities"
              arrow={true}
              theme="SOLID"
            />
          </div>

        </div>

        {/* Right Content */}
        <div className={styles.expertiseImageWrapper}>

          <div className={styles.expertiseImageContainer}>
            <img
              src="/assets/home/About-Section.png"
              alt="Industrial FRP composite storage tank"
              loading="lazy"
              width={1280}
              height={960}
              className={styles.expertiseImage}
            />
          </div>

          <div className={styles.expertiseCard}>

            <div className={styles.expertiseCardContent}>

              <div className={styles.expertiseIconWrapper}>
                <img
                  className={styles.expertiseIcon}
                  src="/assets/home/SVG/Tick.svg"
                  alt="Tick Icon"
                />
              </div>

              <div>

                <p className={styles.expertiseCardSubHeading}>
                  Engineering Advantage
                </p>

                <p className={styles.expertiseCardHeading}>
                  High Strength-to-Weight Ratio
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
)}