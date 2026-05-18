import styles from "./partnerStyles.module.css";

const clientsBanners = [
  {
    image: "/assets/home/Partners/1x/Partner-1-8.png",
    alt: "Sintex",
  },
  {
    image: "/assets/home/Partners/1x/Partner-2-8.png",
    alt: "Welspun-world",
  },
  {
    image: "/assets/home/Partners/1x/Partner-3-8.png",
    alt: "Brite",
  },
  {
    image: "/assets/home/Partners/1x/Partner-4-8.png",
    alt: "Shree Malani Group",
  },
];

export const Partners = () => (
  <section className={styles.partnersParent}>

    <div className={styles.partnersWrapper}>

      <div className={styles.partnersContentWrapper}>

        <span className={styles.partnersTag}>
          PARTNERS
        </span>

        <h2 className={styles.partnersHeading}>
          Technology & Industry Partners
        </h2>

        <p className={styles.partnersDescription}>
          Delivering solutions across industries and large-scale projects
        </p>

      </div>

      <div className={styles.partnersLogoWrapper}>

        {clientsBanners.map((partner) => (
          <img
            key={partner.alt}
            src={partner.image}
            alt={partner.alt}
            className={styles.partnersLogo}
          />
        ))}

      </div>

    </div>

  </section>
);