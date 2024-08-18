import React from "react";
import "../globals.css";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <h1>About</h1>
        <p className={styles.topBottom}>
          Welcome to my project showcase, where I've brought together five
          unique applications as part of my journey through FreeCodeCamp's
          frontend development curriculum. Each of these apps represents a
          milestone in my learning process, highlighting various aspects of web
          development and user experience design.
        </p>
        <p className={styles.para}>
          <b>Pomodoro Timer : </b> The Pomodoro Timer is designed to help you
          stay productive by breaking your work into focused intervals. This
          tool leverages the popular Pomodoro Technique, allowing you to manage
          your time efficiently while avoiding burnout.
        </p>
        <p className={styles.para}>
          <b>Calculator : </b> A simple yet powerful calculator that handles
          basic arithmetic operations with ease. This project was a great way to
          explore the fundamentals of JavaScript, from DOM manipulation to
          handling user input.
        </p>
        <p className={styles.para}>
          <b>Drum Machine : </b> Unleash your inner musician with the Drum
          Machine app! This interactive tool lets you play different drum sounds
          by pressing keys or clicking buttons. It was an exciting project that
          brought together audio manipulation and event handling.
        </p>
        <p className={styles.para}>
          <b>Markdown Previewer : </b> The Markdown Previewer allows you to see
          real-time previews of your markdown text. It's a handy tool for
          developers and writers who need a quick way to convert markdown to
          HTML. This project emphasized the importance of real-time data binding
          and user-friendly interfaces.
        </p>
        <p className={styles.para}>
          <b>Random Quote Generator : </b> Get inspired with a click of a
          button! The Random Quote Generator provides you with random quotes at
          the touch of a button, complete with the ability to share your
          favorite quotes on social media. This project introduced me to API
          integration and asynchronous JavaScript.
        </p>
        <p className={styles.bottom}>
          This collection of projects reflects my growth as a frontend
          developer, showcasing skills in HTML, CSS, JavaScript, and React. I'm
          proud of the progress I've made and excited to continue exploring the
          world of web development.
        </p>

        <p className={styles.bottom}>
          Thank you for visiting, and I hope you enjoy exploring these
          applications as much as I enjoyed building them!
        </p>
      </div>

      <div className={styles.bulb}>
        <div className={styles.bulbIcon}>💡</div>
      </div>
    </div>
  );
};

export default About;
