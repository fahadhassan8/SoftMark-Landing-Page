import "./contactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
  return (
    <div className="contact-main">
      <div className="contact-heading">
        <h1>Get in Touch</h1>
      </div>
      <div className="form">
        <div className="form-content">
          <label>
            <input type="text" placeholder="Name" />
          </label>
          <label>
            <input type="email" placeholder="Email" />
          </label>
          <label>
            <input type="number" placeholder="Phone Number" />
          </label>
          <label>
            <input type="text" placeholder="Company" />
          </label>
          <div className="dropdown-container">
            <select className="dropdown">
              <option value="option1" disabled>
                select a service
              </option>
              <option value="option2">Web Development</option>
              <option value="option3">Mobile App & Web Development</option>
              <option value="option4">SEO</option>
              <option value="option5">Digital Marketing</option>
            </select>
          </div>

          <textarea placeholder="Enter your text here..."></textarea>
        </div>
        <div className="contact-btn">
          <button> <FontAwesomeIcon icon={faPaperPlane} /> 
          <span>Send message</span></button>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
