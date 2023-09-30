"use client";
import React from "react";
import styles from "./page.module.css";
//import Image from "next/image";
import Button from "@/components/Button/Button";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
/* eslint-disable react/no-unescaped-entities */

// export const metadata = {
//   title: "Contact Niber Foundation ",
//   description: "This is Contact Page",
// };

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    const client = new MongoClient(MONGO);

    try {
      await client.connect();

      const database = client.db("test");
      const collection = database.collection("subscriber");

      const result = await collection.insertOne({
        name,
        email,
        message,
      });

      console.log("Data inserted successfully");
      console.log(result);
    } catch (error) {
      console.error("Error inserting data:", error);
    } finally {
      await client.close();
    }
  };

  //   const [error, setError] = useState(null);

  //   const router = useRouter();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const name = e.target[0].value;
  //     const email = e.target[1].value;
  //     const message = e.target[2].value;

  //     try {
  //       const res = await fetch("/api/subscriber", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name,
  //           email,
  //           message,
  //         }),
  //       });
  //       res.status === 201 && router.push("/?success=Account has been created");
  //     } catch (err) {
  //       setError(err);
  //       console.log(err);
  //     }
  //   };

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
           {error && "Something went wrong!"}
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
            required
            placeholder="email"
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
            <Button url="" text="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
