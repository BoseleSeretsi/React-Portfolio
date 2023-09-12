

import React from 'react';
// import SomeComponent from './SomeComponent';
// import './Portfolio.css'; 

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

            <section classNamea="portfolio-projects">
                <h2>My Projects</h2>
                <ul>
                    <li><a href="#project1">Project 1</a></li>
                    <li><a href="#project2">Project 2</a></li>
                    <li><a href="#project3">Project 3</a></li>
                </ul>
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
        </div>
    );
}


export { Portfolio, Home}
