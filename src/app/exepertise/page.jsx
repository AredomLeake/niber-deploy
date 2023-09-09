import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose Category to Contribute</h1>
      <div className={styles.items}>
        <Link href="/portfolio/Humanitarian" className={styles.item}>
          <span className={styles.title}>Expertise</span>
        </Link>
        <Link href="/donate" className={styles.item}>
          <span className={styles.title}>Donation</span>
        </Link>
        <Link href="/portfolio/Plans" className={styles.item}>
          <span className={styles.title}>Inkind</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
