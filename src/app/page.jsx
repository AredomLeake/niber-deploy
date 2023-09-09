import Image from "next/image";
import styles from "./page.module.css";
// import Hero from "public/hero.png";
import thome from "public/thome.png";
import farm11 from "public/farm11.png";
import hum from "public/hum1.png";
import agri from "public/Agri.png";
import youth from "public/youth.png";
import school from "public/shool.png";
import sycho from "public/sycho.png";
import emer from "public/emer.png";
import consum from "public/consum.png";
import rural from "public/rural.png";
import water from "public/water.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            {" "}
            Rebuild Tigray with Niber Foundation.
          </h1>
          <p className={styles.desc}>Making a difference in our community</p>
          <p className={styles.desc}>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Button url="/portfolio" text="See Our Works" />
        </div>
        <div className={styles.item}>
          {/* <Image src={Hero} alt="" className={styles.img} /> */}
          <Image src={thome} alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.subcontainer}>
        <div>
          <h1>Programs</h1>
        </div>
      </div>
      <div className={styles.projectco}>
        <div className={styles.devco}>
          <div>
            <h2>Developmental</h2>
          </div>
          <div className={styles.prog}>
            <p>
              Political strength emanates from strong economy. So, economic
              empowerment of Tegarus is a basis for all.
            </p>
            <div className={styles.programimg}>
              <Image src={farm11} alt="" className={styles.farmimg} />
            </div>
          </div>
        </div>
        <div className={styles.humcon}>
          <div>
            <h2>Humanitarian</h2>
          </div>
          <div className={styles.prog}>
            <p>
              Quick emergency relief need, with an intention of ‘no one will
              NEVER die due to post-war intervention failure’
            </p>
            <div className={styles.programimg}>
              <Image src={hum} alt="" className={styles.donimg} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Developmental Programs</h1>
      </div>
      <div className={styles.progra}>
        <div className={styles.prog}>
          <h3>Agriculture Modernization</h3>
          <p>
            Project Beneficiaries: - IDPs their children died during the war
            <br />
            Project Finance: - ETB 1 Billion
          </p>
          <div className={styles.programimg}>
            <Image src={agri} alt="" />
          </div>
        </div>

        <div className={styles.prog}>
          <h3>Rural-youth empowerment</h3>
          <p>
            Project Beneficiaries:- Pilot farmers children <br />
            Project Finance:- ETB 1 Billion
          </p>
          <div className={styles.programimg}>
            <Image src={rural} alt="" />
          </div>
        </div>

        <div className={styles.prog}>
          <h3>Youth vocational capacitating</h3>
          <p>
            Project Beneficiaries:- Unemployed urban youth <br />
            Project Finance:- ETB 1 Billion
          </p>
          <div className={styles.programimg}>
            <Image src={youth} alt="" />
          </div>
        </div>
        <div className={styles.prog}>
          <h3>Water & domestic vegetation</h3>
          <p>
            Project Beneficiaries:- Rural community
            <br />
            Project Finance:- ETB 10 million
          </p>
          <div className={styles.programimg}>
            <Image src={water} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.linkdiv}>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div>
        <h1>Humanitarian Programs</h1>
      </div>
      <div className={styles.progra}>
        <div className={styles.prog}>
          <h3>School Renovation</h3>
          <p>
            Project Beneficiaries:- War-torn schools
            <br />
            Project Finance:- ETB 200 billion
          </p>

          <div className={styles.programimg}>
            <Image src={school} alt="" />
          </div>
        </div>

        <div className={styles.prog}>
          <h3>Post-war psychosocial support</h3>
          <p>
            Project Beneficiaries:- All age women encountered GBV
            <br />
            Project Finance:- ETB 20 million{" "}
          </p>
          <div className={styles.programimg}>
            <Image src={sycho} alt="" />
          </div>
        </div>

        <div className={styles.prog}>
          <h3>Emergency medical supply</h3>
          <p>
            Project Beneficiaries:- Veterans with disability
            <br />
            Project Finance:- ETB 100 million
          </p>
          <div className={styles.programimg}>
            <Image src={emer} alt="" />
          </div>
        </div>
        <div className={styles.prog}>
          <h3>Consumables supply</h3>
          <p>
            Project Beneficiaries:- IDPs their children died during the war
            <br />
            Project Finance:- ETB 200 Billion
          </p>
          <div className={styles.programimg}>
            <Image src={consum} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.linkdiv}>
        <Button url="/portfolio" text="See Our Works" />
      </div>
    </div>
  );
}
