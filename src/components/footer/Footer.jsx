import Image from "next/image";
import nber from "/public/niber-logo.png";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <div className={styles.logo}>
          <Image src={nber} alt="" className={styles.logo} />
        </div>

        <div className={styles.links}>
          <a href="/">Home</a>
          <a href="/programs">Programs</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
          <a href="/donate">Donate</a>
          <a href="/about">About</a>
          <a href="/contribution">Contribution</a>
        </div>

        <div className={styles.social}>
          <a href="#">
            <Image
              src="/4.png"
              width={15}
              height={15}
              className={styles.icon}
              alt="Lama Dev"
            />
          </a>
          <a href="#">
            <Image
              src="/3.png"
              width={15}
              height={15}
              className={styles.icon}
              alt="Lama Dev"
            />
          </a>
          <a href="#">
            <Image
              src="/1.png"
              width={15}
              height={15}
              className={styles.icon}
              alt="Lama Dev Facebook Account"
            />
            <Image
              src="/2.png"
              width={15}
              height={15}
              className={styles.icon}
              alt="Lama Dev Facebook Account"
            />
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Niber Foundation. All rights reserved.
      </div>
    </footer>
  );
}
