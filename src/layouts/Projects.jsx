import React from 'react';
import  { Icon, Text }  from '../components';
import styles from '../styles/Projects.module.scss';
import { project } from '../assets/images';
const Projects = () => {
  const projectsData = {
    projectName: 'ProjectName',
    altProject: 'Project Image',
    title: 'Projects',
    projectsText: 'These are a few of my personal projects, you can explore them with more detail here at my github profile.'
  }
  return (
    <section className={styles.Projects} id="projects">
      <Text className={styles.bigText} textContent={projectsData.title}/>
      <Text className={styles.normalText} textContent={projectsData.projectsText}/>
      <div className={styles.iconContainer}>
        <Icon divClass={styles.divIcon} src={project} alt={projectsData.altProject} imageClassName={styles.icon} textClassName={styles.iconText} textContent={projectsData.projectName} />
        <Icon divClass={styles.divIcon} src={project} alt={projectsData.altProject} imageClassName={styles.icon} textClassName={styles.iconText} textContent={projectsData.projectName} />
        <Icon divClass={styles.divIcon} src={project} alt={projectsData.altProject} imageClassName={styles.icon} textClassName={styles.iconText} textContent={projectsData.projectName} />
        <Icon divClass={styles.divIcon} src={project} alt={projectsData.altProject} imageClassName={styles.icon} textClassName={styles.iconText} textContent={projectsData.projectName} />
        <Icon divClass={styles.divIcon2} src={project} alt={projectsData.altProject} imageClassName={styles.icon} textClassName={styles.iconText} textContent={projectsData.projectName} />
      </div>
    </section>
  );
};

export default Projects;
