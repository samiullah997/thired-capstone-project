import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/card.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({
  id, slug, name, image, firstAppearance, publisher,
}) => (
  <>
    <div className="homeCard">
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img className="card-img" src={image} alt={`img-${slug}`} />
      </a>
      <div className="card-desc">
        <Link to={`/heroes/${slug}`}>
          <button
            type="button"
            className="btn-more"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Link>
        <div className="card-sub-desc">
          <h5 className="post-name">{name}</h5>
          <p className="card-sub-desc">
            <span className="">First Appearance:</span>
            {firstAppearance === '-' ? (
              <span className="">
                Not Found
              </span>
            ) : (
              firstAppearance
            )}
          </p>

          <div className="">
            {publisher || (
              <span className="">No Publisher</span>
            )}
          </div>
          <span className="">
            ID:
            {' '}
            {id}
          </span>
        </div>
      </div>
    </div>
  </>
);
Card.propTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  firstAppearance: PropTypes.string.isRequired,
  publisher: PropTypes.string,
};
Card.defaultProps = {
  publisher: 'No publisher',
};
export default Card;
