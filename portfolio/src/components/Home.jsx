

import React from 'react';
import Skills from './Skills';
import Testimonial from './Testimonial';
// import SomeComponent from './SomeComponent';
// import './Portfolio.css'; 

function Me() {
    return (
        <Portfolio></Portfolio>
    )
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
                "Hello! I'm [Bosele Seretsi], crafting digital experiences straight from [North-West, Klerksdorp]. My journey in web development blends aesthetics with functionality, giving life to memorable web creations. Dive into my portfolio and see where innovation meets design. Let's connect and create something incredible!"
                </p>
            </section>

           

            <section className="portfolio-contact">
                <h2>Get in Touch</h2>
                <p>Email me at: <a href="mailto:bos.seretsi@gmail.com">bos.seretsi@gmail.com</a></p>
            </section>

            <footer className="portfolio-footer">
                <p>© 2023 by Bosele. Proudly created with React.</p>
            </footer>
        </div>
    );
};





const Home = () => {
    const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrVB-eaAagTMtDcZCmbHclzDmIW2zxstQcruFipJrW_30L9kITNzyRav9ERckW5nSBYKw&usqp=CAU"; // Replace with your actual image URL

    const backgroundStyle = {
        height: '100vh', 
        backgroundImage: `url(${ imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
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
                "Hello! I'm [Bosele Seretsi], crafting digital experiences straight from [North-West, Klerksdorp]. My journey in web development blends aesthetics with functionality, giving life to memorable web creations. Dive into my portfolio and see where innovation meets design. Let's connect and create something incredible!"
                </p>
            </section>

           
<Skills/>
<Testimonial/>
           

        </div>
        </div>
    );
}



const Projects = () => {
    return (
        

            <section classNamea="portfolio-projects">
                <h2>My Projects</h2>
                <ul>
                    <li>
                        <a href="https://github.com/BoseleSeretsi/Survey-App"><img src="https://cdn.discordapp.com/attachments/1105089049401765940/1151868914674978866/SURVEY-IMAGE.png"></img>Quick-Survey's</a></li>
                    <li><a href="https://github.com/BoseleSeretsi/personal-application"><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthediynuts.com%2Fdiy-home-projects-you-can-this-weekend%2F&psig=AOvVaw1aLYtqMCrEWjPCG_tt6IFi&ust=1694783553895000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJDivO-WqoEDFQAAAAAdAAAAABAE"></img>DIY House Renovations</a></li>
                    <li><a href="#project3">Project 3</a></li>
                </ul>
            </section>

    );
};

export { Portfolio, Home, Projects}
