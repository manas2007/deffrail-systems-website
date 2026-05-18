import { WHO_WE_ARE_CAROUSEL } from "../../global/constants/aboutUs";

import styles from "./whoWeAreStyles.module.css";

const WHO_WE_ARE = [
  "Water and chemical storage solutions",
  "Sewage treatment systems including PSTP and TTP",
  "Custom industrial FRP solutions",
  "Rotational moulded plastic products",
];

const WhoWeAre = () => {

  return (
    <section className={styles.whoWeAreParent}>

      <div className={styles.whoWeAreWrapper}>

        {/* Upper Section */}
        <div className={styles.whoWeAreTopContainer}>

          {/* Left Content */}
          <div className={styles.whoWeAreHeadingWrapper}>

            <p className={styles.whoWeAreTag}>
              WHO WE ARE
            </p>

            <h1 className={styles.whoWeAreHeading}>
              Composite Solutions
              for Water and
              Industrial Systems
            </h1>

          </div>

          {/* Right Content */}
          <div className={styles.whoWeAreContentWrapper}>

            <p className={styles.whoWeAreDescription}>
              Deffrail Systems is a brand specializing in innovative,
              lightweight composite solutions for complex industrial
              applications across static and dynamic environments.
              We are a key manufacturer of rotational moulded plastic
              and composite products, serving defence, railways,
              government enterprises, and a wide range of industries.
            </p>

            <p className={styles.whoWeAreDescription}>
              With over 35 years of technical experience, our team
              focuses on developing, validating, and delivering
              solutions tailored to evolving industry requirements.
            </p>

            <p className={styles.whoWeAreDescription}>
              We are committed to enabling sustainable progress
              through systems that support water recycling and reuse,
              helping optimize resource utilization across infrastructure
              and industrial applications.
            </p>

          </div>

        </div>

        {/* Carousel Section */}
        <div className={styles.whoWeAreCarouselWrapper}>

          {WHO_WE_ARE_CAROUSEL.map((card, index) => (
            <img
              key={index}
              className={styles.whoWeAreCarouselImage}
              src={card}
              alt={`Who We Are ${index + 1}`}
            />
          ))}

        </div>

        {/* Bottom Section */}
        <div className={styles.whoWeAreBottomSection}>

          <div className={styles.whoWeAreBottomWrapper}>

            <div className={styles.whoWeAreBottomContentWrapper}>

              <p className={styles.whoWeAreBottomTag}>
                WHAT WE DO
              </p>

              <p className={styles.whoWeAreBottomHeading}>
                We provide customized FRP and plastic solutions
                across a wide range of applications
              </p>

              <p className={styles.whoWeAreBottomDescription}>
                Our systems are designed for durability, efficiency,
                and long-term performance across industrial,
                commercial, and government applications.
              </p>

            </div>

            <div className={styles.whoWeAreListWrapper}>

              {WHO_WE_ARE.map((item, index) => (
                <div
                  key={index}
                  className={styles.whoWeAreListItemWrapper}
                >

                  <p className={styles.whoWeAreListItem}>
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhoWeAre;