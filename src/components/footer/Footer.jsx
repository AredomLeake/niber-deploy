import Image from "next/image";
// import nber from "/public/niber-logo.png";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <div className={styles.logo}>
          <img src="/niber-logo.png" alt="" className={styles.logo} />
        </div>

        <div className={styles.links}>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
          <a href="/donate">Donate</a>
          <a href="/about">About</a>
          <a href="/programs/humanitarian">Contribution</a>
        </div>

        <div className={styles.social}>
          <a href="https://www.youtube.com/@NiberFoundation">
            <img
              src="/4.png"
              width={25}
              height={25}
              className={styles.icon}
              alt="youtube"
            />
          </a>
          <a href="https://twitter.com/NiberFoundation?t=EVaHrxbBUpKrEKte3DSfEQ&s=09">
            <img
              src="/3.png"
              width={25}
              height={25}
              className={styles.icon}
              alt="twitter"
            />
          </a>
          <a href=" https://www.facebook.com/Niber.Foundation?mibextid=ZbWKwL">
            <img
              src="/1.png"
              width={25}
              height={25}
              className={styles.icon}
              alt="Facebook"
            />
          </a>

          <a href="https://t.me/Niber_Foundation">
            <img
              src="/2.png"
              width={25}
              height={25}
              className={styles.icon}
              alt="insta"
            />
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        <p className={styles.copyright}>
          {" "}
          &copy; {new Date().getFullYear()} Niber Foundation, All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
