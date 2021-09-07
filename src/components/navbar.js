import React, {  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { faDribbble, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './navbar.css'



function Navbar() {

    function handleMouseEnter(e){
        console.log(e)
        e.target.classList.remove('dark')
    }

    function handleMouseLeave(e){
        e.target.classList.add('dark')
    }

    function handleClick(event) {
        if (event.target.className !== "active") {
            event.target.classList.add("active")
            document.querySelector(".full-menu").classList.add("open")
            document.querySelector(".navbar__container").classList.add("contrast")
            document.querySelector('.text-base').classList.remove('dark')
        } else if (event.target.className === "active") {
            event.target.classList.remove("active")
            document.querySelector(".full-menu").classList.remove("open")
            document.querySelector(".navbar__container").classList.remove("contrast")
            document.querySelector('.text-base').classList.add('dark')
        }
    }

    return (
        <div className="navbar__container">
            <div className="logo">
                <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="./"><p className="text-base dark"> <b>Burbano</b> Studio </p></a>
            </div>
            <div className="navigation">
                <div className="social">
                    <a href="https://github.com/JhoanBurbano/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/sebastian-burbano/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.instagram.com/sebas.burbano07/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://dribbble.com/SebasBurbano" target="_blank"><FontAwesomeIcon icon={faDribbble} /></a>
                    <a onClick={handleClick}><div id="icon-bars" className=""></div></a>
                </div>
            </div>
            <nav className="full-menu">
                <ul className="nav__menú">
                    <li>
                        <a href="#">works</a>
                    </li>
                    <li>
                        <a href="#">curriculum vitae</a>
                    </li>
                    <li>
                        <a href="#">skills</a>
                    </li>
                    <li>
                        <a href="#">contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar