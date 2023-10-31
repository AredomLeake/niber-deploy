"use client";

import styles from "./page.module.css";
//import Image from "next/image";
import Button from "@/components/Button/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

/* eslint-disable react/no-unescaped-entities */

const Contact = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      res.status === 201 && router.push("/?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };
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
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            required
            className={styles.input}
          />
          <input
            type="text"
            placeholder="email"
            required
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            placeholder="message"
            required
            cols="30"
            rows="10"
          ></textarea>
          <div className={styles.btnco}>
            <Button text="Send" url="" />
            {error && "Something went wrong!"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
