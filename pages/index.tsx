import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Slider from "@/components/slider";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import * as React from "react";

export default function Home() {
  const heroImage = React.useRef(null);
  const mainHeading = React.useRef(null);
  const mainContainer = React.useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const animationOptions = {
    opacity: 1,
    duration: 1.2,
    delay: 0,
    ease: Power3.easeInOut,
    y: 0,
  };

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(".section", {
        onEnter(section) {
          gsap.to(section, animationOptions);
        },
        start: "top center",
      });
    }, mainContainer);

    gsap.to(heroImage.current, {
      opacity: 0.4,
      duration: 1.2,
      delay: 0.4,
      ease: Power3.easeInOut,
      y: 0,
    });

    gsap.to(mainHeading.current, {
      opacity: 1,
      duration: 1.2,
      delay: 0.2,
      ease: Power3.easeInOut,
      y: 0,
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>M Supplies</title>
        <meta name="description" content="Wholesale beauty supplies shop" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} ref={mainContainer}>
        <section className={`${styles.hero}`}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroBackground} ref={heroImage}>
            <Image
              src={"/assets/showroom.jpeg"}
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.heroContent} ref={mainHeading}>
            <h1 className={styles.heroText}>
              M<span>supplies</span>
            </h1>
            <p className={styles.heroSubtitle}>a Wigclub subsidiary</p>
          </div>
        </section>

        <section className={`${styles.tagline}`}>
          <div className={styles.taglineContent}>
            <h2 className={styles.taglineUpperLine}>
              your <span className={styles.tagEmphasis}>one stop shop</span> for
              all your beauty supplies
            </h2>
          </div>
        </section>

        <section className={styles.brands}>
          <h2>Brands we carry</h2>
          <div className={styles.brandsCarousel}>
            <Slider />
          </div>
        </section>
      </main>
    </>
  );
}
