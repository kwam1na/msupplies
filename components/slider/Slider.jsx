import { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import Image from "next/image";
import { Rerousel } from "rerousel";

const cards = [
  "mizani.png",
  "dark-and-lovely.png",
  "tresemme.png",
  "ceris.jpeg",
  "mizani.png",
  "dark-and-lovely.png",
  "tresemme.png",
  "ceris.jpeg",
];

export default function Carousel() {
  const customerLogo = useRef(null);

  const renderItem = (item, index) => {
    return (
      <div className={styles.slide}>
        <Image
          src={`/assets/${item}`}
          alt=""
          width={140}
          height={140}
          key={index}
          style={{ objectFit: "contain" }}
          ref={customerLogo}
        />
      </div>
    );
  };
  return (
    <div className={styles.slider}>
      <div className={styles.slidetrack}>{cards.map(renderItem)}</div>
    </div>
  );
}
