import styles from "./productRangeStyles.module.css";

const ProductRange = (props) => {

  const { SERVICES_DATA } = props;

  return (
    <section className={styles.productRangeParent}>

      <div className={styles.productRangeWrapper}>

        <div className={styles.productRangeContentWrapper}>

          <h2 className={styles.productRangeHeading}>
            Our Product Range
          </h2>

          <p className={styles.productRangeDescription}>
            Explore a range of solutions designed to meet diverse
            industrial and infrastructure requirements.
          </p>

        </div>

        <div className={styles.productRangeGridWrapper}>

          {SERVICES_DATA.productListing.map((card) => (
            <article
              key={card.title}
              className={styles.productRangeCard}
            >

              <div className={styles.productRangeImageWrapper}>

                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className={styles.productRangeImage}
                />

              </div>

              <div className={styles.productRangeCardContent}>

                <p className={styles.productRangeCardHeading}>
                  {card.title}
                </p>

                <p className={styles.productRangeCardDescription}>
                  {card.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductRange;