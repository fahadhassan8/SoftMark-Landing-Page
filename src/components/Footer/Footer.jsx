import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import "./footer.css";

export default function Footer() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <>
      <div className="footer-container">
        <h1 data-aos="fade-up" data-aos-duration="1500">SoftMark Solutions</h1>
        <div className="footer Container">
            <div className="quick-links" data-aos="fade-up" data-aos-duration="1500">
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>Our Work</li>
                    <li>About Us</li>
                    <li>Why Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="services" data-aos="fade-up" data-aos-duration="1500">
            <h2 className="services">Services</h2>
                <ul>
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>Search Engine Optimization</li>
                    <li>Digital Marketing</li>
                    <li>Logo Designing</li>
                </ul>
            </div>
            <div className="location" data-aos="fade-up" data-aos-duration="1500">
            <span><FontAwesomeIcon icon={faLocationCrosshairs} /></span>
                <ul>
                    <li>United States Office</li>
                    <li>307, Wyoming</li>
                    <li>Pakistan Office</li>
                    <li>705, Noor Trade Tower, Gulshan e Iqbal 13 A</li>
                    <li>Karachi</li>
                </ul>
            </div>
        </div>
        <div className="footer-last">
        
                <span>
                <FaLinkedin />    
                </span>
                <span>
                <FaFacebook />    
                </span>
                <span>
                <FaTwitter />    
                </span>
                
            <h3>admin@softmarksolutions.com</h3>
        </div>



      </div>
    </>
  );
}
