import styles from "./ServicesSection.module.css";
import Card from "./Card";
import { SPECIALTY } from "@/app/constants";

function ServicesSection() {
  return (
    <section id="services" className={styles.services}>
      <p className={`${styles.title} ${styles.left}`}> SERVICIOS</p>
      <div className={styles.cards}>
        {SPECIALTY.map((card) => (
          <Card
            key={card.key}
            src={card.src}
            alt={card.key}
            href={card.href}
            description={card.description}
            title={card.title}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection