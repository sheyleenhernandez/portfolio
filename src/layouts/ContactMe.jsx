import React from 'react';
import styles from '../styles/ContactMe.module.scss';
import  { Text, Image }  from '../components';
import { github, gmail, whatsapp} from '../assets/images'
const ContactMe = () => {
  const contactData = {
    title: ' Are you interested in my work? Here is my Contact Info!',
    contactText: 'sheyhc1005@gmail.com',
    contactText2: '3135279458',
    contactText3: 'sheyleenhernandez',
    gitImage: 'Git Logo',
    wpImage: 'WhatsApp logo',
    gmailImage: 'Gmail Logo',
  }
  return (
    <section className={styles.ContactMe} id="contact" >
      <Text className={styles.bigText} textContent={contactData.title}/>
      <div className={styles.contactContainer}>
        <div className={styles.iconContainer}>
          <Image src={gmail} alt={contactData.gmailImage} className={styles.icon}/>
          <Text className={styles.normalText} textContent={contactData.contactText}/>
        </div>
        <div className={styles.iconContainer}>
          <Image src={whatsapp} alt={contactData.wpImage} className={styles.icon}/>
          <Text className={styles.normalText} textContent={contactData.contactText2}/>
        </div>
        <div className={styles.iconContainer}>
          <Image src={github} alt={contactData.gitImage} className={styles.icon}/>
          <Text className={styles.normalText} textContent={contactData.contactText3}/>
        </div>

      </div>
    </section>
  );
};

export default ContactMe;
