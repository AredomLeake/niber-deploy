// pages/donate.js
"use client";
import styles from "./page.module.css";
import { useState } from "react";
//import { loadStripe } from "@stripe/stripe-js";

//const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

export default function Donate() {
  const [donation, setDonation] = useState(100);

  const sampleAmounts = [10, 25, 50];

  const handleSubmit = async (e) => {
    e.preventDefault();

    //const stripe = await stripePromise;
    // Call Stripe.js to create payment intent
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Make a Donation</h1>

      <div className={styles.amountbuttons}>
        {sampleAmounts.map((amount) => (
          <button
            type="button"
            key={amount}
            onClick={() => setDonation(amount)}
          >
            Donate ${amount}
          </button>
        ))}
      </div>

      <div className={styles.input}>
        <label className={styles.label}> Enter Donation Amount</label>
        <input
          type="number"
          value={donation}
          onChange={(e) => setDonation(e.target.value)}
        />
      </div>

      <button className={styles.submitbutton} type="submit">
        Donate Now
      </button>
      <h1> Temporarly you can use this account number</h1>
      <h3>
        CBE: 1000559492225 <span className={styles.span}>Niber Foundation</span>{" "}
        <br />
        <br />
        Swift Code:CBETETAA
      </h3>
    </form>
  );
}
