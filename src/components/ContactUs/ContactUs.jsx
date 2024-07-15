import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import "./contactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <div className="contact-main">
      <div className="contact-heading">
        <h1>Get in Touch</h1>
      </div>
      <div className="form">
        <div className="form-content">  
          <label>
            <input type="text" placeholder="Name" data-aos="fade-up" data-aos-duration="1500"/>
          </label>
          <label>
            <input type="email" placeholder="Email" data-aos="fade-up" data-aos-duration="1500"/>
          </label>
          <label>
            <input type="number" placeholder="Phone Number"data-aos="fade-up" data-aos-duration="1500" />
          </label>
          <label>
            <input type="text" placeholder="Company" data-aos="fade-up" data-aos-duration="1500"/>
          </label>
          <div className="dropdown-container">
            <select className="dropdown" data-aos="fade-up" data-aos-duration="1500">
              <option value="option1" disabled>
                select a service
              </option>
              <option value="option2">Web Development</option>
              <option value="option3">Mobile App & Web Development</option>
              <option value="option4">SEO</option>
              <option value="option5">Digital Marketing</option>
            </select>
          </div>

          <textarea placeholder="Enter your text here..." data-aos="fade-up" data-aos-duration="1500"></textarea>
        </div>
        <div className="contact-btn" data-aos="fade-up" data-aos-duration="1500">
          <button> <FontAwesomeIcon icon={faPaperPlane} /> 
          <span>Send message</span></button>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
