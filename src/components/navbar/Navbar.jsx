"use client";
import niberlogo from "/public/niber-logo.png";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "",
    url: "/donate",
  },
  {
    id: 2,
    title: "",
    url: "/dashboard",
  },
  {
    id: 3,
    title: "Home",
    url: "/",
  },
  {
    id: 4,
    title: "Programs",
    url: "/programs",
  },
  {
    id: 5,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 6,
    title: "About",
    url: "/about",
  },

  {
    id: 7,
    title: "Subscribe",
    url: "/contact",
  },

  {
    id: 8,
    title: "Contribution",
    url: "/exepertise",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logolink}>
        <Image src={niberlogo} alt="" className={styles.logo} />
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <div key={link.id}>
            {link.title === "Programs" ? (
              <div className={styles.programs}>
                <Link href={link.url}>{link.title}</Link>

                <div className={styles.submenu}>
                  <Link href="/programs/humanitarian">Humanitarian</Link>
                  <Link href="/programs/developmental">Developmental</Link>
                </div>
              </div>
            ) : (
              <Link key={link.id} href={link.url} className={styles.link}>
                {link.title}
              </Link>
            )}
          </div>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
