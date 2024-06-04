import React from "react";
import {FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/aryman.gupta3/" className="home__social-icon" target="_blank">
                <FiInstagram />
            </a>
            <a href="https://github.com/arymangupta01" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/arymangupta11/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;