"use client";
import React from "react";
import { FaUser, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { useState } from "react";
import styles from "./page.module.css";

const Expertise = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [expertise, setExpertise] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can include the logic to submit the expertise to your backend or API

    // Clear form fields after submission
    setName("");
    setEmail("");
    setExpertise("");
  };
  return (
    <div className={styles.maincontainer}>
      <div className={styles.excontent}>
        <div className={styles.h1content}>
          <h1>Share Your Expertise</h1>
        </div>
        <div className={styles.pcontent}>
          <p>
            We believe that everyone has unique skills and knowledge to share.
            Whether you're an expert in a specific field, a hobbyist with a
            passion, or simply someone who loves to learn and share knowledge,
            we invite you to join us and share your expertise.
          </p>
        </div>
      </div>
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
            />
          </div>

          <div className={styles.forminputwrapper}>
            <label>
              <FaBriefcase className={styles.forminputicon} />
            </label>
            <input
              className={styles.forminput}
              type="text"
              placeholder="Expertise"
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
            />
          </div>

          <button className={styles.formsubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <br />
      <div className={styles.par}>
        <p>
          Once you submit your expertise, our team will review it to ensure it
          aligns with our guidelines. We strive to maintain a diverse range of
          expertise and ensure that the content shared is valuable and relevant
          to our community.
        </p>
        <p>
          By contributing your expertise, you're not only helping others learn
          and grow, but you're also becoming part of a vibrant community of
          knowledge-sharing. You may inspire someone to pursue their passion,
          solve a problem, or discover a new interest. Your contribution
          matters, and we appreciate your willingness to share your expertise
          with others.
        </p>
      </div>
    </div>
  );
};
export default Expertise;

// const MyForm = () => {

/* <form className={styles.container}  onSubmit={handleSubmit}>
        <div >
          <label className={styles.label} htmlFor="name">Name:</label>
          <input className={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
        </div>
        <div>
          <label className= { styles.label} htmlFor="expertise">Expertise:</label>
          <textarea className= { styles.textarea}
            id="expertise"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
          />
        </div>
        <button className= { styles.button}type="submit">Submit</button>
      </form> */

// export default MyForm;
