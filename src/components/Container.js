import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getHeroes from '../redux/heroes/heroesSlice';
import { allHeroes } from '../redux/heroes/Reducer';
import List from './List';

const Container = () => {
  const heroes = useSelector(allHeroes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (heroes.length === 0) dispatch(getHeroes());
  }, []);

  return (<List heroes={heroes} />);
};

export default Container;
