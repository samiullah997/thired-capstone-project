import HeroDetails from '../components/HeroDetails';

it('test Hero Form component', async () => {
  expect(<HeroDetails />).toMatchSnapshot();
});
