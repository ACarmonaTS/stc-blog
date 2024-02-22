import Link from "next/link";
import Image from "next/image";
import styles from "./Whatsapp.module.css";
import whats from "../../../../public/whatsapp.svg";

function WhatsApp() {
  return (
    <Link
      href="https://wa.me/5519540513/?text=Requiero%20apoyo%20para%20la%20plataforma..."
      target="_blank"
      className={styles.whats}
    >
      <Image src={whats} alt="whatsapp" className={styles.image} />
    </Link>
  );
}

export default WhatsApp
