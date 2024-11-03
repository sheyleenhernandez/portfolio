import React from 'react';
import  { Text, Image }  from '../components';
import styles from '../styles/Home.module.scss'; 
import { code } from '../assets/images';

const Home = () => {
  const homeData = {
    textContent: "Hey there, I'm Sheyleen, a Junior Developer",
    textContent2: "If you are looking for the best, let's build something special together;)",
    alt: "React code",
  };
  return (
    <section className={styles.Home} id="home">
      <div className={styles.textContainer}>
        <Text className={styles.bigText} textContent={homeData.textContent}/>
        <Text className={styles.normalText} textContent={homeData.textContent2}/>
      </div>

      <div className={styles.imageContainer}>
        <Image src={code} alt={homeData.alt} className={styles.img}/>
      </div>
    </section>
  );
};

export default Home;
