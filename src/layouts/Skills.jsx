import React from 'react';
import  {  ProgressBar, Text }  from '../components';
import styles from '../styles/Skills.module.scss'; 

const Skills = () => {
    const skillsData = {
        title: 'Development Skills',
        text: 'These are some skills I have cultivated and continue to develop as part of my career in software development.'
      };
    const data = [
        {title: 'HTML', progress: '100%'},
        {title: 'CSS3', progress: '95%'},
        {title: 'SASS', progress: '90%'},
        {title: 'React', progress: '85%'},
        {title: 'JavaScript', progress: '80%'},
        {title: 'React Native', progress: '30%'},
    ] 
    return (
        <section className={styles.Skills} id="skills">
            <div >
                <Text className={styles.bigText} textContent={skillsData.title}/>
                <Text className={styles.normalText} textContent={skillsData.text}/>
                <ProgressBar data={data}></ProgressBar>
            </div>
        </section>
    );
};

export default Skills;
