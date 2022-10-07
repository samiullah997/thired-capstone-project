import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { filterHeroes, load20Heroes } from '../redux/heroes/Reducer';
import '../css/form.css';

const HeroForm = ({ publishers }) => {
  const [publisher, setPublisher] = useState('');
  const dispatch = useDispatch();
  const handleSelect = (filter) => {
    setPublisher(filter);
  };

  const handleSubmitPublisher = (e) => {
    e.preventDefault();
    dispatch(filterHeroes(publisher));
  };

  const handleDefault20 = () => {
    setPublisher('');
    dispatch(load20Heroes([]));
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmitPublisher}>
        <select
          className="form-list"
          name="publisher"
          label="Filter Heroes"
          onChange={handleSelect}
          value={publisher}
        >
          {publishers.map((publisher) => (
            <option value={publisher} key={publisher}>
              {publisher}
            </option>
          ))}
        </select>

        <div className="form-buttons">
          <button
            className="default"
            type="button"
            onClick={handleDefault20}
          >
            Default 20
          </button>
          <button
            className=""
            type="submit"
          >
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

HeroForm.propTypes = {
  publishers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default HeroForm;
