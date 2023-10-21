import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const humanitarian = () => {
  /* eslint-disable react/no-unescaped-entities */
  return (
    <div className={styles.container}>
      <h1> Programs</h1>
      <h2>Humanitarian programs</h2>
      <div className={styles.subcontainer}>
        <div className={styles.descontainer}>
          <h3>
            Enhancing Healthcare Access through a Niberfoundation Medical
            Assistance Program
          </h3>
          <p>
            Nber foundation Medical Assistance Program is a beacon of hope for
            individuals and families who face barriers in accessing quality
            healthcare. Through its focus on affordable services, a robust
            referral network, prescription medication assistance, health
            education, and mental health support, the program is transforming
            lives and restoring dignity to those in need. By addressing the
            healthcare gap, the organization is paving the way for a healthier
            and more equitable society, where everyone has the opportunity to
            thrive.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src="/hum2.png" className={styles.img} alt="" />
        </div>
      </div>
      <div className={styles.subcontainer}>
        <div className={styles.descontainer}>
          <h3>Nourishing Communities:</h3>
          <p>
            Niber foundation Food Assistance Program is a shining example of how
            a community can come together to address the pressing issue of food
            insecurity. With their commitment to providing access to fresh,
            nutritious food, coupled with educational opportunities and
            sustainable initiatives, they are not only alleviating immediate
            hunger but also empowering individuals and families to break the
            cycle of food insecurity. Through their tireless efforts, they are
            nourishing communities and fostering a brighter, healthier future
            for all.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src="/human1.png" className={styles.img} alt="" />
        </div>
      </div>
      <div className={styles.subcontainer}>
        <div className={styles.descontainer}>
          <h3>Empowering Minds:</h3>
          <p>
            Empowering Minds is committed to transforming lives through
            education. We firmly believe that education is a powerful tool for
            personal growth, social mobility, and community development. By
            providing scholarships, mentoring, skill development workshops,
            career counseling, and a resource center, we aim to create a
            supportive educational ecosystem that empowers individuals to
            overcome obstacles and achieve their dreams. Together, lets build a
            brighter future for our community through education. Join us in our
            mission to empower minds and transform lives.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src="/edu1.png" className={styles.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default humanitarian;
