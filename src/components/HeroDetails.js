import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  currentHero, getHero, currentHeroStatus,
} from '../redux/currentHeroe/CurrentHeroSlice';
import { cleanupHero } from '../redux/currentHeroe/Reducer';
import Loading from './Loading';
import '../css/details.css';

const HeroDetails = ({ hero }) => {
  const heroDetails = useSelector(currentHero);
  const dispatch = useDispatch();
  const status = useSelector(currentHeroStatus);

  const toTitleCase = (string) => string.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

  useEffect(() => {
    document.title = `Heroic | ${toTitleCase(hero.replace('-', ' '))}`;
    dispatch(cleanupHero({})); // prevents info leak
    dispatch(getHero(hero));
  }, [hero]);

  let heroInfo;
  if (Object.keys(heroDetails).length !== 0) {
    const {
      name, slug, images: { lg: image }, powerstats, biography, connections, work,
    } = heroDetails;

    heroInfo = (
      <div className="details-container">
        <img className="details-image" src={image} alt={`img-${slug}`} />
        <h2 className="details-name">{name}</h2>
        <div className="details-wrapper">
          <h3 className="power-state">PowerStats:</h3>
          <div className="power-state-details">
            {Object.keys(powerstats).map((stat) => (
              <h4 className="details-row" key={stat}>
                {stat}
                <span className="">{powerstats[`${stat}`]}</span>
              </h4>

            ))}
          </div>
          <h4 className="birth-disc">
            Place of Birth:
            <p className="birth-date">{biography.placeofBirth || 'N/A'}</p>
          </h4>
          <div className="">
            <h3 className="work">Work:</h3>
            <h4 className="occupation">
              occupation:
              <p>{work.ocuupation || 'N/A'}</p>
            </h4>

            <h4 className="base">
              base:
              <p>{work.base || 'N/A'}</p>
            </h4>

          </div>
          <div className="biography">
            <h3 className="details-bio">Bio:</h3>
            <h4 className="details-full-name">
              Fullname:
              <p>{biography.fullName}</p>
            </h4>

            <h4 className="details-aliases">Aliases:</h4>
            <div className="details-aliases-name">
              {biography.aliases.map((alias) => <span className="" key={alias}>{alias || 'N/A'}</span>)}
            </div>

          </div>
          <div className="connections">
            <h3 className="details-connection">Connections:</h3>
            <h4 className="affiliation">affiliation: </h4>
            <p>{connections.groupAffiliation}</p>
            <h4 className="relatives">relatives: </h4>
            <p>{connections.relatives}</p>
          </div>

        </div>

      </div>
    );
  }
  return (
    <>

      {status === 'succeeded'
        ? (
          heroInfo
        ) : <Loading /> }

    </>
  );
};

HeroDetails.propTypes = {
  hero: PropTypes.string.isRequired,
};
export default HeroDetails;
