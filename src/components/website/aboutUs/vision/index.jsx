import styles from "./visionStyles.module.css";

const Vision = () => {

  return (
    <section className={styles.visionParent}>

      <div className={styles.visionWrapper}>

        <div className={styles.visionContentWrapper}>

          <p className={styles.visionDescription}>
            Deffrail Systems’ vision is driven by a commitment to
            delivering high-quality rotational moulded plastic and
            composite solutions while continuously evolving to meet
            customer needs through innovation and technical expertise.
            The company focuses on ensuring customer satisfaction,
            sustainable growth, and long-term value creation.
          </p>

          <p className={styles.visionDescription}>
            Guided by the belief, “We promote the solution of water to care
            for the environment and the universe,” Deffrail Systems
            continues to work towards responsible and sustainable
            progress.
          </p>

          <img
            src="/assets/aboutUs/mission.svg"
            alt=""
            className={styles.visionFloatingImage}
          />

        </div>

        <img
          className={styles.visionMainImage}
          src="/assets/aboutUs/Mission.png"
          alt="Deffrail Systems Vision"
        />

      </div>

      <img
        src=""
        alt=""
        className={styles.visionBottomImage}
      />

    </section>
  );
};

export default Vision;