"use client";

import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <header className={styles.header}>
      <div>AAN</div>
      <div>
        <p className={pathName == "/" ? `${styles.active1}` : ""}>
          <Link href="/">Home</Link>
        </p>
        <p className={pathName == "/about" ? `${styles.active1}` : ""}>
          <Link href="/about">About</Link>
        </p>
        <p className={pathName == "/contact" ? `${styles.active1}` : ""}>
          <Link href="/contact">Contact</Link>
        </p>
        <p className={pathName == "/blog" ? `${styles.active1}` : ""}>
          <Link href="/blog">Blog</Link>
        </p>
      </div>
      <div>
        <p className={pathName == "/admin" ? `${styles.active2}` : ""}>
          <Link href="/admin">Admin</Link>
        </p>
        <p className={pathName == "/logout" ? `${styles.active2}` : ""}>
          <Link href="/logout">Logout</Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
