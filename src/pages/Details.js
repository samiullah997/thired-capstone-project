import React from 'react';
import ProptTypes from 'prop-types';
import HeroDetail from '../components/HeroDetails';

const Details = ({ slug }) => {
  const [,, heroSlug] = slug.split('/'); // prop => /heroes/149-captain-america

  const name = heroSlug.slice(heroSlug.indexOf('-') + 1);

  return (
    <>
      <div>
        <HeroDetail hero={name} />
      </div>
    </>
  );
};

Details.propTypes = {
  slug: ProptTypes.string.isRequired,
};
export default Details;
