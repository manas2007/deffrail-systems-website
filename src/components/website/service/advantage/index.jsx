import styles from "./advantageStyles.module.css";

const ADVANTAGES = [
  "Reduced weight for easier transportation and installation",
  "High structural strength and durability",
  "Corrosion-resistant and low maintenance",
  "Suitable for diverse industrial and infrastructure applications",
];

const Advantage = (props) => {

  const { SERVICE_DATA } = props;

  return (
    <section className={styles.advantageParent}>

      <div className={styles.advantageWrapper}>

        {/* Upper Section */}
        <div className={styles.advantageContainer}>

          {/* Left Content */}
          <div className={styles.advantageContentWrapper}>

            <h2 className={styles.advantageHeading}>
              The Composite Advantage
            </h2>

            <p className={styles.advantageDescription}>
              FRP offers unparalleled performance
              benefits compared to traditional
              construction materials, reducing lifecycle
              costs and improving operational
              efficiency.
            </p>

          </div>

          {/* Right Content */}
          <div className={styles.advantageListWrapper}>

            {ADVANTAGES.map((item, index) => (
              <div
                key={index}
                className={styles.advantageListItem}
              >

                <img
                  className={styles.advantageTickIcon}
                  src="/assets/propertyDetail/lightweightSolutions/SVG/Tick.svg"
                  alt="Tick Icon"
                />

                <p className={styles.advantageListText}>
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Section */}
        {/* <div className={styles.advantageBottomWrapper}>
        </div> */}

      </div>

    </section>
  );
};

export default Advantage;