import { faGear, faLessThan, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => (
  <div>
    <nav>
      <div>
        <h2>
          <Link to="/">
            <FontAwesomeIcon icon={faLessThan} />
          </Link>
          {' '}
          2025
        </h2>
      </div>
      <p>most views</p>
      <div className="nav-icons">
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </nav>
  </div>
);
export default Navbar;
