import React, { useEffect, useRef } from 'react';
import { Text, Image } from '../components';
import styles from '../styles/Home.module.scss'; 
import { code } from '../assets/images';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
  const homeRef = useRef(null);

  const homeData = {
    textContent: "Hey there, I'm Sheyleen, a Junior Developer",
    textContent2: "If you are looking for the best, let's build something special together;)",
    alt: "React code",
  };

  useEffect(() => {
    const scroll = gsap.timeline();
    scroll.to(window, { 
      scrollTo: { y: "#aboutme", offsetY: -120 }, 
      duration: 0.8, 
      ease: "power1.out",
    })
  }, []); 

  return (
    <>
      <section className={styles.Home} id="home" ref={homeRef}>
        <div className={styles.textContainer}>
          <Text className={styles.bigText} textContent={homeData.textContent} />
          <Text className={styles.normalText} textContent={homeData.textContent2} />
        </div>

        <div className={styles.imageContainer}>
          <Image src={code} alt={homeData.alt} className={styles.img} />
        </div>
      </section>

    </>
  );
};

export default Home;
