import styles from "./HomeSection.module.css";

function HomeSection() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.video}>
        <video
          src="/metro.mp4"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
          }}
          muted
          autoPlay
          loop
          playsInline
        />
      </div>
      <div className={styles.label}>
        <p className={styles.title}>
          Gestor administrativo y operativo para las instalaciones del Sistema
          de Transporte Colectivo (METRO) de la Ciudad de México
        </p>
      </div>
    </section>
  );
}

export default HomeSection;
