import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getHeroes from '../redux/heroes/heroesSlice';
import { allHeroes, allFilteredHeroes, allStatus } from '../redux/heroes/Reducer';
import List from './List';
import HeroForm from './HeroForm';
import { cleanupHero } from '../redux/currentHeroe/Reducer';
import Loading from './Loading';

const Container = () => {
  const heroes = useSelector(allHeroes);
  const filteredHeroes = useSelector(allFilteredHeroes);
  const status = useSelector(allStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Heroic';
    if (heroes.length === 0) dispatch(getHeroes());
    dispatch(cleanupHero({})); // prevents info leak
  }, [dispatch]);

  const getPublishers = () => [...new Set(heroes.map(({ publisher }) => {
    if (!publisher) return 'No Publisher';
    return publisher;
  }))];

  const getHeroesToRender = () => (filteredHeroes.length === 0 ? heroes : filteredHeroes);

  return (
    <div>
      {status === 'loading' ? <Loading />

        : (
          <>
            <HeroForm publishers={getPublishers()} />
            <List heroes={getHeroesToRender()} />
          </>
        )}
    </div>
  );
};

export default Container;
