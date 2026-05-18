import styles from "./footerStyles.module.css";

export const Footer = () => (
  <footer className={styles.footerParent}>

    <div className={styles.footerWrapper}>

      <div className={styles.footerGrid}>

        {/* Left */}
        <div className={styles.leftSectionWrapper}>

          <div className={styles.footerLogoWrapper}>
            <img
              className={styles.footerLogo}
              src="/assets/home/SVG/Deffrail-Logo.svg"
            />
          </div>

          <p className={styles.footerDescription}>
            Precision-engineered and verified systems driving the adoption
            of advanced composites and FRP for resilient, sustainable
            infrastructure across dynamic and static applications.
          </p>

        </div>

        {/* Right */}
        <div className={styles.rightSectionWrapper}>

           {/* Company */}
        <div className={styles.companyWrapper}>

          <p className={styles.footerHeading}>Company</p>

          <ul className={styles.footerList}>
            {["Home", "About", "Solutions"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className={styles.footerLink}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Contact */}
        <div >

          <p className={styles.footerHeading}>Contact</p>

          <ul className={styles.footerList}>
            <li>contact@deffrailsystems.com</li>
            <li>+1 (555) 123-4567</li>
            <li>
              Industrial Park, Sector 4,
              <br />
              Manufacturing Hub, 10001
            </li>
          </ul>

        </div>

        </div>
        
       

      </div>

      {/* Bottom */}
      <div className={styles.footerBottom}>
        © 2026 Deffrail Systems. Precision Engineered Infrastructure.
      </div>

    </div>

  </footer>
);