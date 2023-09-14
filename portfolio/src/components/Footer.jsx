// Footer.js
import React from 'react';
import{
AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 
"react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer-container">
            <a href="https://Github.com/BoseleSeretsi" target="_blank" rel="noopener noreferrer">
                {" "}
                <AiOutlineGithub size={50}/>{""}
            </a>

            <a href="https://www.linkedin.com/in/bosele-seretsi-b16314278" target="_blank" rel="noopener noreferrer">
                {" "}
                <AiOutlineLinkedin size={50}/>{""}
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                {" "}
                <AiOutlineFacebook size={50}/>{""}
            </a>
            <a href="https://instagram.com/bosele36" target="_blank" rel="noopener noreferrer">
                {" "}
                <AiOutlineInstagram size={50}/>{""}
            </a>
        </footer>
    );
};

export default Footer;