import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/hum2.png" fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Niber Foundation </h1>
          <h2 className={styles.imgDesc}>
            A non profitable organization working on war-torn regions in
            Ethiopia
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Welcome to Niber Foundation, a dedicated and passionate group of
            individuals committed to rebuilding and revitalizing war-torn
            regions, both economically and politically. Our organization firmly
            believes in the power of sustainable development and social
            empowerment to create lasting change in communities affected by
            conflict. At Niber Foundation, we understand the devastating impact
            of war on societies, leaving behind shattered infrastructure,
            displaced populations, and fractured economies. Our mission is to
            bring hope, stability, and progress to these regions by implementing
            innovative and impactful initiatives. Economic
            <br />
            <br /> Empowerment:We strongly believe that economic stability is
            the cornerstone of rebuilding communities. Through our various
            programs and projects, we strive to create sustainable livelihood
            opportunities for individuals affected by war. By providing
            vocational training, microfinance support, and entrepreneurship
            development, we aim to empower individuals to become self-reliant
            and contribute to the economic growth of their communities.
            Political Engagement: We recognize the significance of political
            stability and good governance in post-conflict regions. Our
            organization works closely with local governments, community
            leaders, and civil society organizations to promote inclusive and
            transparent governance systems. Through advocacy, capacity-building
            workshops, and civic engagement initiatives, we aim to foster a
            culture of accountability and participation, ensuring that the
            voices of the marginalized are heard and represented.
            <br />
            <br />
          </p>
        </div>
        <div className={styles.imagecon}>
          <Image
            src="/discus1.png"
            width={1400}
            height={600}
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Brothers and siters in Tigray, We want you to know that our heart
            goes out to each and every one of you during these incredibly
            challenging times. The struggles you face on a daily basis are
            unimaginable, and the impact of war on your lives is deeply
            saddening. Please remember that you are not alone in this journey.
            The world may seem distant, but there are countless individuals who
            care about your well-being and long for peace and stability in your
            Tigray. We stand with you in solidarity, hoping for brighter days
            ahead. We understand that the challenges you face are multifaceted.
            The destruction of infrastructure, loss of loved ones, lack of basic
            necessities, and the emotional scars left by war are overwhelming.
            But even amidst the darkest times, there is always a glimmer of
            hope. You possess an incredible strength and resilience that
            inspires us all. Your determination to rebuild, to heal, and to
            create a better future is truly commendable. Remember to lean on one
            another, to support and uplift each other, together we are stronger.
            While we may not be able to fully understand the depths of your
            experiences, We want you to know that we are here to listen, to
            offer support, and to amplify your voices. Your stories, your
            struggles, and your dreams matter. We must never lose sight of the
            importance of empathy, compassion, and understanding. We
            passionately hope that stability will find its way to Tigray soon,
            bringing an end to the suffering and paving the way for healing and
            reconciliation. Until we meet, please know that you are not
            forgotten. You are in our thoughts, our prayers, and our hearts.
            With heartfelt warmth and unwavering empathy, NIBER Community{" "}
          </p>
        </div>
        <div className={styles.imagecon}>
          <Image
            src="/human1.png"
            width={1400}
            height={600}
            alt=""
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.btnco}>
        <Button url="/contact" text="Contact" />
      </div>
    </div>
  );
};

export default About;
