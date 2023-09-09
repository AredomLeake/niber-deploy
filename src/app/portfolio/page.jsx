import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/Humanitarian" className={styles.item}>
          <span className={styles.title}>Humanitarian</span>
        </Link>
        <Link href="/portfolio/Developmental" className={styles.item}>
          <span className={styles.title}>Developmental</span>
        </Link>
        <Link href="/portfolio/Plans" className={styles.item}>
          <span className={styles.title}>Plans</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
