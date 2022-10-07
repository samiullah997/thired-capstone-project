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
        </h2>
      </div>
      <p className="nav-title">Top Heroes</p>
      <div className="nav-icons">
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </nav>
  </div>
);
export default Navbar;
