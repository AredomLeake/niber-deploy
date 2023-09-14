import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import hum2 from "/public/farm11.png";
import human1 from "/public/train1.png";
import edu from "public/edu2.png";

const developmental = () => {
  return (
    <div className={styles.container}>
      <h1> Programs</h1>
      <h2>Developmental programs</h2>
      <div className={styles.subcontainer}>
        <div className={styles.descontainer}>
          <h3>Agriculture Modernization</h3>
          <p>
            Welcome to Cultivating Prosperity, a transformative agricultural
            modernization program designed to revolutionize farming practices
            and empower local farmers in our community. In collaboration with
            Niberfoundation, our program aims to enhance agricultural
            productivity, sustainability, and profitability. Through our
            initiatives, we strive to promote innovation, provide training and
            resources, and create a thriving agricultural sector that
            contributes to the overall development and prosperity of our
            community.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={hum2} alt="" />
        </div>
      </div>
      <div className={styles.subcontainer}>
        <div className={styles.descontainer}>
          <h3>Job Training</h3>
          <p>
            Welcome to Empowering Futures, a comprehensive job training program
            designed to equip individuals in our community with the necessary
            skills and knowledge to thrive in the modern job market. In
            collaboration withNiber foundation, our program aims to bridge the
            gap between education and employment by providing practical
            training, mentorship, and support to individuals seeking to enhance
            their employability and secure sustainable livelihoods.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={human1} alt="" />
        </div>
      </div>
      <div className={styles.subcontainer}>
        <div className={styles.descontainer}>
          <h3>Education</h3>
          <p>
            Welcome to Empowering Minds, a comprehensive educational assistance
            program designed to uplift and empower individuals in our local
            community. Our program, implemented in collaboration with Niber
            foundation, aims to provide educational support and resources to
            individuals of all ages, ensuring equal access to quality education.
            Through our initiatives, we strive to foster a love for learning,
            promote academic excellence, and create a brighter future for our
            community.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={edu} alt="" />
        </div>
      </div>
    </div>
  );
};

export default developmental;
