import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Slider from "@/components/slider";
import { gsap, Power3 } from "gsap";
import dynamic from "next/dynamic";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import * as React from "react";

const IGPostWithNoSSR = dynamic(() => import("@/components/ig-feed/ig-post"), {
  ssr: false,
});

const igPosts = ["COsXQxpj1wv", "CODYy-fpeUp", "CDza0W7pPYB"];

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
              Your <span className={styles.tagEmphasis}>one stop</span> for all
            </h2>
            <h2 className={styles.taglineBottomLine}>your beauty supplies</h2>
          </div>
        </section>

        <section className={`${styles.brands}`}>
          <h2>Brands we carry</h2>
          <div className={styles.brandsCarousel}>
            <Slider />
          </div>
        </section>

        <div className={styles.lowerContent}>
          <section className={`${styles.location} section ${styles.section}`}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.locationBlob}
              viewBox="0 0 500 500"
              width="100%"
              id="blobSvg"
              style={{ opacity: 1 }}
            >
              <defs>
                <linearGradient
                  id="location-gradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgb(255, 192, 203)" }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(255, 192, 203)" }}
                  />
                </linearGradient>
              </defs>{" "}
              <path
                id="blob"
                fill="url(#location-gradient)"
                style={{ opacity: 1 }}
              >
                <animate
                  attributeName="d"
                  dur="60000ms"
                  repeatCount="indefinite"
                  values="M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z;M384.02639,318.52969Q359.04619,387.05939,278.02474,435.01815Q197.0033,482.97691,137.94391,408.01485Q78.88453,333.05279,75.91422,249.0132Q72.94391,164.97361,138.46041,107.43731Q203.97691,49.90102,276.0132,88.41917Q348.04949,126.93731,378.52804,188.46866Q409.0066,250,384.02639,318.52969Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M451.77435,331.68776Q380.0333,413.37552,297.8522,408.1811Q215.67111,402.98668,163.20108,360.14446Q110.73105,317.30225,116.40549,253.17111Q122.07993,189.03996,169.7144,146.88551Q217.34887,104.73105,314.55328,76.47669Q411.75769,48.22232,467.63654,149.11116Q523.51539,250,451.77435,331.68776Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z"
                ></animate>
              </path>
            </svg>
            <div className={styles.locationBody}>
              <div className={styles.locationHeader}>
                <h2 className={styles.ctaText}>Locate us at</h2>
              </div>

              <a
                className={styles.locationText}
                href="https://goo.gl/maps/esFgNGnn7ADKGyDR6"
                target="_blank"
                rel="noopener noreferrer"
              >
                2 Jungle Ave, Accra, Ghana
              </a>

              {/* <div
              className={`${styles.locationIcon} ${styles.locationAnimation}`}
            >
              <IconLocation
                size={"4rem"}
                color={"pink"}
                className={styles.icon}
              />
            </div> */}
            </div>
          </section>

          <section className={`${styles.storeHours} section ${styles.section}`}>
            <div className={styles.locationBody}>
              <div className={styles.locationHeader}>
                <h2 className={styles.ctaText}>Store hours</h2>
              </div>

              <div className={styles.daysOfOperationContainer}>
                <p className={styles.daysOfOperation}>Monday - Saturday</p>
                <p className={styles.hoursOfOperation}>10 am to 8 pm</p>
              </div>

              <div className={styles.daysOfOperationContainer}>
                <p className={styles.daysOfOperation}>Sunday</p>
                <p className={styles.hoursOfOperation}>11 am to 6 pm</p>
              </div>
            </div>
            <svg
              className={styles.locationBlob}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              width="100%"
              id="blobSvg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "rgb(255, 0, 102)" }} />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(255, 0, 102)" }}
                  />
                </linearGradient>
              </defs>
              <path id="blob" fill="url(#gradient)">
                <animate
                  attributeName="d"
                  dur="25000ms"
                  repeatCount="indefinite"
                  values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
                />
              </path>
            </svg>
          </section>

          <section className={`${styles.igSection}`}>
            <div className={styles.igHeader}>
              <h2 className={styles.ctaText}>Our Instagram</h2>
            </div>
            <div className={styles.igPostsContainer}>
              {igPosts.map((postId, index) => {
                return <IGPostWithNoSSR key={index} postId={postId} />;
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
