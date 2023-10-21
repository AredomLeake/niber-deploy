"use client";

import Link from "next/link";

import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

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
    url: "/programs/developmental",
  },
  {
    id: 5,
    title: "Blog",
    url: "/",
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
    url: "/donate",
  },
];

const Navbar = () => {
  const session = useSession();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logolink}>
        <img img src="/niber-logo.png" alt="" className={styles.logo} />
      </Link>

      {/* navigation */}

      <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
        {/* Hamburger Icon */}
        <FiMenu className={styles.fimenu} />
      </button>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeMenu} onClick={() => setIsOpen(false)}>
            {/* Close Icon */}
            <FiX className={styles.Fix} />
          </button>

          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={styles.mobileLink}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}

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
            ) : link.title === "Contribution" ? (
              <div className={styles.programs}>
                <Link href={link.url}>{link.title}</Link>

                <div className={styles.cosubmenu}>
                  <Link href="/donate">Donation</Link>
                  <Link href="/Contribution/expertise">Expertise</Link>
                  <Link href="/Contribution/inkind">Inkind</Link>
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
