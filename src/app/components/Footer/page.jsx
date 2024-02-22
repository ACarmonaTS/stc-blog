import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../constants";
import styles from "./Footer.module.css";

import metro from "@/app/assets/metrologos.jpg";
import logotype from "@/app/assets/sinergman.svg";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.info}>
        <Link
          href="https://www.sinergman.com.mx/"
          target="_blank"
          className={styles.logotypebox}
        >
          <Image src={logotype} alt="sinergman" className={styles.imageLogo} />
        </Link>
        <ul className={styles.menu}>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </ul>
        <Link href="/" className={styles.atcsbox}>
          <Image src={metro} alt="STC CDMX" className={styles.imageLogo} />
        </Link>
      </div>
      <div className={styles.contact}>
        <div className={styles.data}>
          <Image
            src="./phone.svg"
            width={28}
            height={28}
            alt="teléfono"
            className={styles.image}
          />
          &nbsp;&nbsp;55 5536 6063
        </div>
        <div className={styles.data}>
          <Image
            src="./phone.svg"
            width={28}
            height={28}
            alt="teléfono"
            className={styles.image}
          />
          &nbsp;&nbsp;55 5536 6165
        </div>
        <div className={styles.data}>
          <Image
            src="./phone.svg"
            width={28}
            height={28}
            alt="teléfono"
            className={styles.image}
          />
          &nbsp;&nbsp;55 5669 2887
        </div>
      </div>
      <div className={styles.legend}>© 2024 SINERGMAN -STC</div>
    </section>
  );
}

export default Footer;
