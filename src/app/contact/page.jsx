import React from "react";
import styles from "./page.module.css";
//import Image from "next/image";
import Button from "@/components/Button/Button";

/* eslint-disable react/no-unescaped-entities */

export const metadata = {
  title: "Contact Niber Foundation ",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>

      <p>Can&#39;t wait to hear from you!</p>
      <div className={styles.content}>
        {/* <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div> */}
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <div className={styles.btnco}>
            <Button url="#" text="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
