import React from 'react';
import  {   Text, Timeline }  from '../components';
import styles from '../styles/Skills.module.scss'; 
import { php, python, vue, react } from '../assets/images'

const LearningPath = () => {
    const milestones = [
        {date: '2022', event: 'PHP', image: php},
        {date: '2022', event: 'Python/Flask', image: python},
        {date: '2023', event: 'Vue + Vite', image: vue},
        {date: '2024', event: 'React/React Native', image: react},
    
    ]
    const LearningData = {
        content: "My Learning Path",
    };
    
    return (
        <section className={styles.Skills} >
            <div className={styles.skillsData}>
                <Text className={styles.bigText} textContent={LearningData.content}/>
                <Timeline milestones={milestones}></Timeline>
            </div>
        </section>
    );
};

export default LearningPath;
