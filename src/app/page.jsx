//import Image from "next/image";
import styles from "./page.module.css";
import { FaDollarSign } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import Button from "@/components/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.item}>
          <h1 className={styles.title}> Rebuild Tigray </h1>
          <h3 className={styles.desc}>Making a difference in our community</h3>
          <p className={styles.paraph}>
            Tigray cant wait any more!! help Tigray today.
          </p>
          <Button url="/donate" text="Donat Now" />
        </div>
      </div>
      <div className={styles.sec1}>
        {" "}
        <p className={styles.paragra}>
          {" "}
          Niber Foundation, a dedicated and passionate group of individuals
          committed to rebuilding and revitalizing war-torn regions, both
          economically and politically. Our organization firmly believes in the
          power of sustainable development and social empowerment to create
          lasting change in communities affected by conflict.
        </p>
      </div>
      <div className={styles.sec2}>
        <h1>Our Impact</h1>
        <h5>since 2023</h5>
        <div className={styles.dashb}></div>
        <p className={styles.para}>
          At Niber Foundation, we firmly believe that health education and food
          access are essential building blocks for thriving communities. Through
          our initiatives, we are committed to empowering individuals with the
          knowledge and resources they need to lead healthier, more fulfilling
          lives. Join us in making a lasting impact by supporting our mission
          and helping us create a brighter future for all. Together, we can make
          a difference.
        </p>
      </div>
      <div className={styles.sec3}>
        <div className={styles.impacon}>
          <div className={styles.moimpaco}>
            <div className={styles.moimpasubco}>
              {" "}
              <FaDollarSign div className={styles.dosign} />
            </div>
          </div>
          <div className={styles.counter}>
            <FaDollarSign />
            <span>0</span>
          </div>
          <div className={styles.descrip}>
            <p>
              Money raised in 2023 to assist Tigray internally displaced persons
            </p>
          </div>
        </div>
        <div className={styles.impacon}>
          <div className={styles.moimpaco}>
            <div className={styles.moimpasubco}>
              <FaShoppingBasket div className={styles.dosign} />
            </div>
          </div>
          <div className={styles.counter}>
            <span>0kg</span>
          </div>
          <div className={styles.descrip}>
            <p>Amount of consumables supplied for IDPS</p>
          </div>
        </div>
        <div className={styles.impacon}>
          <div className={styles.moimpaco}>
            <div className={styles.moimpasubco}>
              <FaDollarSign div className={styles.dosign} />
            </div>
          </div>
          <div className={styles.counter}>
            <FaDollarSign />
            <span>0</span>
          </div>
          <div className={styles.descrip}>
            <p>Money raised in 2023 for medical supplies</p>
          </div>
        </div>
        <div className={styles.impacon}>
          <div className={styles.moimpaco}>
            <div className={styles.moimpasubco}>
              <FaDollarSign div className={styles.dosign} />
            </div>
          </div>
          <div className={styles.counter}>
            <FaDollarSign />
            <span>0</span>
          </div>
          <div className={styles.descrip}>
            <p>Money raised in 2023 for School renovation</p>
          </div>
        </div>
      </div>
      <div className={styles.sec4}>
        <div className={styles.programsco}>
          <h2 className={styles.h2}>
            Developing Communities through Niber Foundation Programs
          </h2>
          <p className={styles.para}>
            At our non-profit organization, we are committed to fostering the
            development of communities and empowering individuals to reach their
            full potential. Through our developmental programs, we aim to
            address various needs and create sustainable, positive change. Here
            are some key areas of focus for our programs:
          </p>
        </div>
        <div className={styles.programainco}>
          <div className={styles.prosubco}>
            <div className={styles.proconco}>
              <h3>Agriculture Modernization:</h3>
              <p>
                In collaboration with Niber Foundation, our program aims to
                enhance agricultural productivity, sustainability, and
                profitability.
              </p>
              <button className={styles.button}>
                <Link href="/programs/developmental">Learn More</Link>
              </button>
            </div>
          </div>
          <div className={styles.prosubco1}>
            <div className={styles.proconco}>
              <h3>Rural-youth empowerment:</h3>
              <p>
                Empowering rural youth is a crucial endeavor that holds the
                potential to transform communities, bridge socio-economic gaps,
                and foster sustainable development.
              </p>
              <button className={styles.button}>
                <Link href="/programs/developmental">Learn More</Link>
              </button>
            </div>
          </div>
          <div className={styles.prosubco2}>
            <div className={styles.proconco}>
              <h3>Water & domestic vegetation:</h3>
              <p>
                Water plays a vital role in the growth and well-being of
                domestic vegetation. Adequate water supply is essential for
                plants to thrive, and different factors can influence the
                effects of water on domestic vegetation.
              </p>
              <button className={styles.button}>
                <Link href="/programs/developmental">Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sec4}>
        <div className={styles.programsco1}>
          <h2 className={styles.h2}>
            Empowering Communities through Humanitarian Programs
          </h2>
          <p className={styles.para}>
            At Niber Foundation, our mission is to make a positive and lasting
            impact on the lives of vulnerable populations around the world.
            <span>
              We believe in the power of collective action and strive to create
              a world where everyone has equal access to basic necessities,
              education, healthcare, and opportunities for a better future.
            </span>
            Our humanitarian programs are designed to address critical issues
            such as poverty, hunger, healthcare disparities, education gaps, and
            environmental sustainability. Here are some key highlights of the
            programs we currently run:
          </p>
        </div>
        <div className={styles.programainco}>
          <div className={styles.prosubco3}>
            <div className={styles.proconco}>
              <h3>School Renovation:</h3>
              <p>
                School renovation is an important process that involves
                improving the condition and functionality of existing
                educational facilities.
                {/* Renovations can address various aspects
                of a school, such as its infrastructure, classrooms, libraries,
                laboratories, playgrounds, and other areas.  */}
              </p>
              <button className={styles.button}>
                <Link href="/programs/humanitarian">Learn More</Link>
              </button>
            </div>
          </div>
          <div className={styles.prosubco4}>
            <div className={styles.proconco}>
              <h3>Healthcare and Wellness:</h3>
              <p>
                We work to establish medical clinics, provide essential
                medicines, and create awareness campaigns on public health
                issues.
              </p>
              <button className={styles.button}>
                <Link href="/programs/humanitarian">Learn More</Link>
              </button>
            </div>
          </div>
          <div className={styles.prosubco5}>
            <div className={styles.proconco}>
              <h3>Consumables supply:</h3>
              <p>
                It's important to note that while the immediate provision of
                consumables is essential, long-term solutions and efforts are
                also crucial to address the needs of IDPs.
              </p>
              <button className={styles.button}>
                <Link href="/programs/humanitarian">Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
