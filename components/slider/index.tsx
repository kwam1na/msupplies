import * as React from "react";
import styles from "./Slider.module.css";
import Image from "next/image";

export default function Slider() {
  return (
    <div className={styles.container}>
      <div className={`${styles.innerContainer}`}>
        <div className={styles.row}>
          <div className={styles.slide}>
            <Image
              src={"/assets/mizani.png"}
              alt=""
              width={140}
              height={140}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.slide}>
            <Image
              src={"/assets/dark-and-lovely.png"}
              alt=""
              width={140}
              height={140}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.slide}>
            <Image
              src={"/assets/tresemme.png"}
              alt=""
              width={140}
              height={140}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.slide}>
            <Image
              src={"/assets/ceris.jpeg"}
              alt=""
              width={140}
              height={140}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
