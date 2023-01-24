import * as React from "react";
import styles from "./Footer.module.css";
import { socialLinks } from "@/constants";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.copyright}>
        <p>
          2023 &copy; M Supplies, a subsidiary of Wigclub. All rights reserved.
        </p>
        <div className={styles.separator} />
        <a
          className={styles.socialLink}
          href="https://v26design.co"
          target="_blank"
          rel="noreferrer noopener"
        >
          Website built by{" "}
          <span className={styles.v26Design}>v26design.co</span>
        </a>
      </div>
      <div className={styles.socials}>
        <p>{"+233 20 909 8507"}</p>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <p>Instagram</p>
        </a>
      </div>
    </footer>
  );
}
