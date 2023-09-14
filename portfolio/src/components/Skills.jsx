import React from 'react';
// import './Work.css';

const Skills = () => {
    const Skills = [
        'HTML',
        'Tailwind',
        'GitHub',
        'JavaScript',
        'Node.js',
        'Bootstrap',
        'Angular 2+ (15)',
        'CSS',
        'React',
        'PostgreSQL'
    ];

    return (
        <div className="work-container">
            <h1>My Skills</h1>
            <ul className="skills-list">
                {Skills.map((Skills, index) => (
                    <li key={index}>{Skills}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;