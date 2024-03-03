import * as React from 'react';
import styles from './Footer.module.css';
import { socialLinks } from '@/constants';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infoColumn}>
          <div className={styles.info}>
            <p className={styles.infoTitle}>Location</p>
            <p>2 Jungle Ave, Accra, Ghana</p>
          </div>
          <div className={styles.info}>
            <p className={styles.infoTitle}>Hours</p>
            <div className={styles.hoursOfOperation}>
              <div className={styles.days}>
                <p>Mondays - Saturdays</p>
                <p>Sundays</p>
              </div>
              <div className={styles.hours}>
                <p>10 am - 8 pm</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.infoColumn}>
          <div className={styles.info}>
            <p className={styles.infoTitle}>Phone</p>
            <p>
              <a href="tel:+233249771887">+233 24 977 1887</a>
            </p>
          </div>
          <div className={styles.info}>
            <div className={styles.socials}>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <p>Instagram</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          2024 &copy; M Supplies, a subsidiary of Wigclub. All rights reserved.
        </p>
        <a
          className={styles.socialLink}
          href="https://v26design.co"
          target="_blank"
          rel="noreferrer noopener"
        >
          built by v26design.co
        </a>
      </div>
    </footer>
  );
}
