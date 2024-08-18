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
        Name: Udara Shauka Email: Udarasenarath875@gmail.com
        <br></br>
        Website: udarashanuka.works
        <br></br>
         I'm looking forward to hearing from you!
      </p>
      <span className={styles.hand}>👋</span>
      </div>
      
    </div>
  );
};

export default Contact;
