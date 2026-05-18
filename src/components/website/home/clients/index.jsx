import styles from "./clientStyles.module.css";

const clientsBanners = [
  {
    image: "/assets/home/Clients/1x/Client-1-8.png",
    alt: "Central Railway",
  },
  {
    image: "/assets/home/Clients/1x/Client-2-8.png",
    alt: "Indian Coast Guard",
  },
  {
    image: "/assets/home/Clients/1x/Client-3-8.png",
    alt: "RDSO",
  },
  {
    image: "/assets/home/Clients/1x/Client-4-8.png",
    alt: "Indian Army",
  },
  {
    image: "/assets/home/Clients/1x/Client-5-8.png",
    alt: "Welspun World",
  },
  {
    image: "/assets/home/Clients/1x/Client-6-8.png",
    alt: "Sintex",
  },
  {
    image: "/assets/home/Clients/1x/Client-7-8.png",
    alt: "Brite",
  },
  {
    image: "/assets/home/Clients/1x/Client-8-8.png",
    alt: "Shree Malani",
  },
];

const Clients = () => (
  <section className={styles.clientsParent}>

    <div className={styles.clientsWrapper}>

      <div className={styles.clientsContentWrapper}>

        <span className={styles.clientsTag}>
          CLIENTS
        </span>

        <h2 className={styles.clientsHeading}>
          Trusted by Industry Leaders
        </h2>

        <p className={styles.clientsDescription}>
          Delivering solutions across industries and large-scale projects
        </p>

      </div>

      <div className={styles.clientsLogoWrapper}>

        {clientsBanners.map((client) => (
          <img
            key={client.alt}
            src={client.image}
            alt={client.alt}
            className={styles.clientsLogo}
          />
        ))}

      </div>

    </div>

  </section>
);

export default Clients;