// "use client";

// import styles from "./page.module.css";
// //import Image from "next/image";
// import Button from "@/components/Button/Button";
// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { MongoClient } from "mongodb";

// /* eslint-disable react/no-unescaped-entities */

// const Contact = () => {
//   async function handleSubmit(e) {
//     e.preventDefault();

//     // Get form data
//     const name = form.name.value;
//     const email = form.email.value;
//     const message = form.message.value;
//     // Connect to db
//     const client = new MongoClient(MONGO);
//     await client.connect();

//     const db = client.db("test");
//     console.log("subscriber connected");
//     // Insert contact doc
//     await db.collection("contacts").insertOne({
//       name: name,
//       email: email,
//       message: message,
//     });
//     // Disconnect
//     client.close();

//     const router = useRouter();

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const name = e.target[0].value;
//       const email = e.target[1].value;
//       const message = e.target[2].value;

//       try {
//         const res = await fetch("/api/auth/register", {
//           method: "POST",

//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             message,
//           }),
//         });
//         res.status === 201 && router.push("/?success=Account has been created");
//       } catch (err) {
//         setError(err);
//         console.log(err);
//       }
//     };
//   }
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Let's Keep in Touch</h1>

//       <p>Can&#39;t wait to hear from you!</p>
//       <div className={styles.content}>
//         <div className={styles.imgContainer}>
//           <Image
//             src="/contact.png"
//             alt=""
//             fill={true}
//             className={styles.image}
//           />
//         </div>
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="name"
//             required
//             className={styles.input}
//           />
//           <input
//             type="text"
//             placeholder="email"
//             required
//             className={styles.input}
//           />
//           <textarea
//             className={styles.textArea}
//             placeholder="message"
//             required
//             cols="30"
//             rows="10"
//           ></textarea>
//           <div className={styles.btnco}>
//             <Button text="Send" url="" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
// import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    try {
      const res = await fetch("/api/auth/subscribe", {
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
      res.status === 201 && router.push("/?form successfully submitted");
    } catch (err) {
      setError(err);
      console.log(err);
      consol.log("page not found");
    }
  };

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>Create an Account</h1> */}
      <h2 className={styles.subtitle}>Let's keep in touch.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <textarea
          type="text"
          placeholder="your message here"
          required
          className={styles.input}
        />
        <button className={styles.button}>submit</button>
        {error && "Something went wrong!"}
      </form>
      {/* <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link> */}
    </div>
  );
};

export default Contact;
