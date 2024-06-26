import React from 'react'
import './Home.css'
import { useState } from 'react';
export default function Home() {
    const [currentSection, setCurrentSection] = useState('home');

    const handleSectionChange = (sectionName) => {
        setCurrentSection(sectionName);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropDown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div id='home' className='la-home'>
            <div className="header">
                <div className="container">
                    <div className="main-header">
                        <div className="logo">
                            <h2>Focal X</h2>
                        </div>
                        <div className="navbar">
                            <li className={currentSection === 'home' ? 'active' : ''} onClick={() => handleSectionChange('home')}> <a href="#home">Home</a></li>
                            <li className={currentSection === 'about' ? 'active' : ''} onClick={() => handleSectionChange('about')}> <a href="#about">About</a></li>
                            <li className={currentSection === 'project' ? 'active' : ''} onClick={() => handleSectionChange('project')}>  <a href="#project">Project</a></li>
                            <li className={currentSection === 'contact' ? 'active' : ''} onClick={() => handleSectionChange('contact')}> <a href="#contact">Contact</a></li>
                            <li className='login'>LogIn</li>

                        </div>
                        <div className="burger-menu" onClick={toggleDropDown}>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        {isDropdownOpen &&
                            <div className="dropdown-menu">
                                <li onClick={() => handleSectionChange('home')}>Home</li>
                                <li onClick={() => handleSectionChange('about')}>About</li>
                                <li onClick={() => handleSectionChange('project')}>Project</li>
                                <li onClick={() => handleSectionChange('contact')}>Contact</li>
                                <li className='login'>LogIn</li>
                            </div>
                        }

                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="text-hero">
                    <h2>Hello !</h2>
                    <p>We are a team of full stack developers ready to bring your projects to life</p>
                    <h1><span>Our Name is</span><br />X6 full stack</h1>
                    <div class="button-group">
                        <a class="btn" href="#contact">Contact Me</a>
                        <a class="btn" href="#project">My Project</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
