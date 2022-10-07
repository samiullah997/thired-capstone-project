import HeroForm from '../components/HeroForm';

it('test Hero Form component', async () => {
  expect(<HeroForm />).toMatchSnapshot();
});
