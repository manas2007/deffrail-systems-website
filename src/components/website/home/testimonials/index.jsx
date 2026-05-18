import styles from "./testimonialStyle.module.css";

const items = [
  {
    quote:
      "We've been using their composite insulated water tanks for years now, and they've never let us down. The tanks are durable, easy to maintain, and the team provides excellent customer service.",
    name: "Ankita Sharma",
    role: "Procurement Manager",
  },
  {
    quote:
      "We switched to their lightweight composite solutions and saw immediate improvement. The products are easy to handle, reduce installation effort, and still deliver excellent strength and durability.",
    name: "Amit Verma",
    role: "Operations Manager",
  },
  {
    quote:
      "We were impressed by the quality of their composite insulated water tanks. They are a reliable solution for our water storage needs, and the team was professional and efficient.",
    name: "Nitish Kumar",
    role: "Site Engineer",
  },
];

export const Testimonials = () => (
  <section className={styles.testimonialsParent}>

    <div className={styles.testimonialsWrapper}>

      <div className={styles.testimonialsContentWrapper}>

        <span className={styles.testimonialsTag}>
          Testimonial
        </span>

        <h2 className={styles.testimonialsHeading}>
          Client Experiences
        </h2>

        <p className={styles.testimonialsDescription}>
          Hear from clients who have improved performance,
          reduced costs, and built long-lasting systems with us.
        </p>

      </div>

      <div className={styles.testimonialsGridWrapper}>

        {items.map((testimonial) => (
          <figure
            key={testimonial.name}
            className={styles.testimonialsCard}
          >

            <blockquote className={styles.testimonialsQuote}>
              {testimonial.quote}
            </blockquote>

            <figcaption className={styles.testimonialsFooter}>

              <div className={styles.testimonialsName}>
                {testimonial.name}
              </div>

              <div className={styles.testimonialsRole}>
                {testimonial.role}
              </div>

            </figcaption>

            <img className={styles.cardLogo} src="/assets/home/SVG/Background Logo.svg" />

          </figure>
        ))}

      </div>

    </div>

  </section>
);