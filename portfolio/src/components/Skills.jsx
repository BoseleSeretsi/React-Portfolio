import React from 'react';
// import './Work.css';

const Work = () => {
    const skills = [
        'HTML',
        'Tailwind',
        'GitHub',
        'JavaScript',
        'Node.js',
        'Bootstrap',
        'Angular 2+ (15)',
        'CSS',
        'PostgreSQL'
    ];

    return (
        <div className="work-container">
            <h1>My Skills</h1>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Work;