import React from 'react';
import  { Timeline, Text, Image, Icon }  from '../components';
import styles from '../styles/AboutMe.module.scss'; 
import { me, communication, leadership, teamwork, problemsolving, php, python, vue, react } from '../assets/images'

const AboutMe = () => {
  const aboutMeData = {
    content: "My Learning Path",
    title: "About Me",
    title2: "Soft Skills",
    text: "Hey, my name is Sheyleen Hernández, I'm from Barranquilla, Colombia, and I'm 19 years old. Currently I'm studying Analysis and software development at SENA, and doing my internship at Globant, I do really like programming, I was going to enroll in law career but programming totally caught my attention and I decided to give it a chance, and I don't regret it at all. \n\n I also enjoy learning languages, I learned English and I loved it and now I want to learn portuguese. ",
    altMe: "Brunette girl with glasses and short hair",
    iconName: "Communication",
    iconName2: "Leadership",
    iconName3: "Problem Solving",
    iconName4: "Teamwork",
    altIcon1: "I am communicative",
  };
  const milestones = [
    {date: '2022', event: 'PHP', image: php},
    {date: '2022', event: 'Python/Flask', image: python},
    {date: '2023', event: 'Vue + Vite', image: vue},
    {date: '2024', event: 'React/React Native', image: react},

  ]
  return (
    <section className={styles.AboutMe} id="about">
      <div className={styles.aboutMeInfo}>
        <div className={styles.aboutMeContainer}>
          <Image src={me} alt={aboutMeData.altMe} className={styles.me}/>
        </div>
        <div className={styles.aboutMeContainer}>
          <Text className={styles.bigText} textContent={aboutMeData.title}/>
          <Text className={styles.normalText} textContent={aboutMeData.text}/>
          <Text className={styles.bigText} textContent={aboutMeData.title2}/>  
          <div className={styles.iconContainer}>
            <Icon divClass={styles.divIcon} src={communication} alt={aboutMeData.altIcon1} imageClassName={styles.icon} textClassName={styles.iconText} textContent={aboutMeData.iconName} />
            <Icon divClass={styles.divIcon} src={leadership} alt={aboutMeData.altIcon1} imageClassName={styles.icon} textClassName={styles.iconText} textContent={aboutMeData.iconName2} />
            <Icon divClass={styles.divIcon} src={problemsolving} alt={aboutMeData.altIcon1} imageClassName={styles.icon} textClassName={styles.iconText} textContent={aboutMeData.iconName3} />
            <Icon divClass={styles.divIcon} src={teamwork} alt={aboutMeData.altIcon1} imageClassName={styles.icon} textClassName={styles.iconText} textContent={aboutMeData.iconName4} />
          </div>
        </div>
      </div>
      <Text className={styles.bigText} textContent={aboutMeData.content}/>
      <Timeline milestones={milestones}></Timeline>
    </section>
  );
};

export default AboutMe;
