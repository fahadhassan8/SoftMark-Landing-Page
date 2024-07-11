import  { useEffect } from 'react'
import AOS from 'aos'
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';
import './Cards.css';

const Cards = ({ path, title, para, }) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);
  return (
    <div className="boxes" data-aos="fade-up" data-aos-duration="1500">
      <div className="cards-img">
        <img src={path} alt={title} />
      </div>
      <div className="card-h2">
        <h2>{title}</h2>
      </div>
      <div className="card-para">
        <p>{para}</p>
      </div>
    </div>
  );
};

Cards.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

export default Cards;
