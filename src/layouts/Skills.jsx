import React from 'react';
import  {  ProgressBar, Text, Timeline }  from '../components';
import styles from '../styles/Skills.module.scss'; 
import { php, python, vue, react } from '../assets/images'

const Skills = () => {
    const milestones = [
        {date: '2022', event: 'PHP', image: php},
        {date: '2022', event: 'Python/Flask', image: python},
        {date: '2023', event: 'Vue + Vite', image: vue},
        {date: '2024', event: 'React/React Native', image: react},
    
    ]
    const skillsData = {
        title: 'Development Skills',
        text: 'These are some skills I have cultivated and continue to develop as part of my career in software development.',
        content: "My Learning Path",
    };
    const data = [
        {title: 'HTML', progress: '100%'},
        {title: 'CSS3', progress: '95%'},
        {title: 'SASS', progress: '90%'},
        {title: 'React', progress: '85%'},
        {title: 'JavaScript', progress: '80%'},
        {title: 'React Native', progress: '30%'},
    ];
    
    return (
        <section className={styles.Skills} id="skills">
            <div className={styles.skillsData}>
                <Text className={styles.bigText} textContent={skillsData.content}/>
                <Timeline milestones={milestones}></Timeline>
            </div>
            <div className={styles.skillsData}>
                <Text className={styles.bigText} textContent={skillsData.title}/>
                <Text className={styles.normalText} textContent={skillsData.text}/>
                <ProgressBar data={data}></ProgressBar>
            </div>
        </section>
    );
};

export default Skills;
