import DButton from "../../global/dButton";
import styles from "./contactStyles.module.css";

export const Contact = (props) => { 
  
    const {handleContactUs} = props;

  return (
  <section
    id="contact"
    className={styles.contactParent}
  >

    <div className={styles.contactWrapper}>

      <div className={styles.contactContainer}>

        <span className={styles.partnersTag}>
          GET IN TOUCH
        </span>

        <h2 className={styles.contactHeading}>
          Ready to build stronger, more sustainable systems?
        </h2>

        <p className={styles.contactDescription}>
          We evaluate your requirements and deliver
          precision-engineered FRP and composite solutions
          for long-term performance.
        </p>

        <div className={styles.contactButtonWrapper}>
          <DButton
            text="Enquire More"
            cta={handleContactUs}
            arrow={true}
            theme="SOLID"
          />
        </div>

      </div>

    </div>

  </section>
)}