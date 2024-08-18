import React from "react";
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className="container">
      
      <div className={styles.content}>
      <h1>Contact</h1>
      <p className={styles.para}>
        If you have any questions, inquiries, or just want to get in touch, feel
        free to reach out! 
        <br></br>
        Name: <i>Udara Shanuka</i>
        <br></br> 
        Email:<i>Udarasenarath875@gmail.com</i> 
        <br></br>
        Website: <i> udarashanuka.works</i>
        <br></br>
         I'm looking forward to hearing from you!
      </p>
      <span className={styles.hand}>👋</span>
      </div>
      
    </div>
  );
};

export default Contact;
