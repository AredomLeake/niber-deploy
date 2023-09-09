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
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "  Programs",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Donate",
    url: "/donate",
  },
  {
    id: 6,
    title: "Subscribe",
    url: "/contact",
  },
  {
    id: 7,
    title: "Dashboard",
    url: "/dashboard",
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
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
