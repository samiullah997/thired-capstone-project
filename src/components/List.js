import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../css/list.css';

const List = ({ heroes }) => (
  <div className="cardList">
    {heroes.map(
      ({
        id, slug, name, image, firstAppearance, publisher,
      }) => (
        <Card
          key={id}
          id={id}
          name={name}
          image={image}
          slug={slug}
          firstAppearance={firstAppearance}
          publisher={publisher}
        />
      ),
    )}
  </div>
);

List.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      slug: PropTypes.string,
      image: PropTypes.string,
      firstAppearance: PropTypes.string,
      publisher: PropTypes.string,
    }),
  ).isRequired,
};
export default List;
