"use client";
import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaBoxOpen,
  FaSortAmountUpAlt,
} from "react-icons/fa";
import { useState } from "react";
import styles from "./page.module.css";

const InKind = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can include the logic to submit the expertise to your backend or API

    // Clear form fields after submission
    setName("");
    setEmail("");
    setItem("");
    setQuantity("");
  };

  return (
    <div className={styles.maincontainer}>
      <h1>Inkind Donation</h1>
      <p>
        Thank you for considering making an in-kind donation to niber
        foundation. Your generous contribution will greatly support our mission
        and make a positive impact on the lives of those in need. Please fill
        out the form below to submit your donation details.
      </p>
      <p>
        We sincerely appreciate your support and will ensure that your donation
        is utilized to benefit those who need it the most.
      </p>
      <br />
      <div className={styles.mainformcontainer}>
        <form className={styles.formcontainer} onSubmit={handleSubmit}>
          <div className={styles.forminputwrapper}>
            <label>
              <FaUser className={styles.forminputicon} />
            </label>

            <input
              className={styles.forminput}
              type="text"
              placeholder="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.forminputwrapper}>
            <label>
              <FaEnvelope className={styles.forminputicon} />
            </label>

            <input
              className={styles.forminput}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.forminputwrapper}>
            <label>
              <FaBoxOpen className={styles.forminputicon} />
            </label>

            <input
              className={styles.forminput}
              type="text"
              placeholder="Item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              required
            />
          </div>

          <div className={styles.forminputwrapper}>
            <label>
              <FaSortAmountUpAlt className={styles.forminputicon} />
            </label>

            <input
              className={styles.forminput}
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>

          <button className={styles.formsubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InKind;

// const [donationInfo, setDonationInfo] = useState({
//   name: '',
//   email: '',
//   item: '',
//   quantity: '',
// });

// const handleChange = (e) => {
//   setDonationInfo({
//     ...donationInfo,
//     [e.target.name]: e.target.value,
//   });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // Send the donationInfo object to your API or perform any other necessary actions
//   console.log(donationInfo);
//   // Reset the form
//   setDonationInfo({
//     name: '',
//     email: '',
//     item: '',
//     quantity: '',
//   });
// };

/* <label className={styles.label}htmlFor="name">Name:</label>
<input
  type="text"
  id="name"
  name="name"
  value={donationInfo.name}
  onChange={handleChange}
  required
/> */
// }
// <label className={styles.label} htmlFor="email">
// Email:
// </label>
// <input
// type="email"
// id="email"
// name="email"
// value={donationInfo.email}
// onChange={handleChange}
// required
// />
