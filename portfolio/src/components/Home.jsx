import React from "react";
import Skills from "./Skills";
import Testimonial from "./Testimonial";
// import SomeComponent from './SomeComponent';
// import './Portfolio.css';

function Me() {
  return <Portfolio></Portfolio>;
}

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Bosele seretsi</h1>
        <p>[Fullstack]Web Developer</p>
      </header>

      <section className="portfolio-intro">
        <p>
          "Hello! I'm [Bosele Seretsi], crafting digital experiences straight
          from [North-West, Klerksdorp]. My journey in web development blends
          aesthetics with functionality, giving life to memorable web creations.
          Dive into my portfolio and see where innovation meets design. Let's
          connect and create something incredible!"
        </p>
      </section>

      <section className="portfolio-contact">
        <h2>Get in Touch</h2>
        <p>
          Email me at:{" "}
          <a href="mailto:bos.seretsi@gmail.com">bos.seretsi@gmail.com</a>
        </p>
      </section>

      <footer className="portfolio-footer">
        <p>© 2023 by Bosele. Proudly created with React.</p>
      </footer>
    </div>
  );
};

const Home = () => {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrVB-eaAagTMtDcZCmbHclzDmIW2zxstQcruFipJrW_30L9kITNzyRav9ERckW5nSBYKw&usqp=CAU"; // Replace with your actual image URL

  const backgroundStyle = {
    height: "100vh",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <div style={backgroundStyle}>
      {/* ... rest of your home content */}
      <div className="portfolio-container">
        <header className="portfolio-header">
          <h1>Bosele seretsi</h1>
          <p>[Fullstack]Web Developer</p>
        </header>

        <section className="portfolio-intro">
          <p>
            "Hello! I'm [Bosele Seretsi], crafting digital experiences straight
            from [North-West, Klerksdorp]. My journey in web development blends
            aesthetics with functionality, giving life to memorable web
            creations. Dive into my portfolio and see where innovation meets
            design. Let's connect and create something incredible!"
          </p>
        </section>

        <Skills />
        <Testimonial />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section classNamea="portfolio-projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <a href="https://github.com/BoseleSeretsi/Survey-App">
            <img className="project-img" src="https://media.discordapp.net/attachments/1105089049401765940/1151868914674978866/SURVEY-IMAGE.png?width=1490&height=1058"></img>Quick-Survey's
          </a>
        </li>
        <li>
          <a href="https://github.com/BoseleSeretsi/personal-application">
            DIY House Renovations
          </a>
        </li>
        <li>
          <a href="#project3">Project 3</a>
        </li>
      </ul>
    </section>
  );
};

export { Portfolio, Home, Projects };
