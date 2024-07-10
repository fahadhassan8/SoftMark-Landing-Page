
import PropTypes from 'prop-types';
import './Cards.css';

const Cards = ({ path, title, para }) => {
  return (
    <div className="boxes">
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
