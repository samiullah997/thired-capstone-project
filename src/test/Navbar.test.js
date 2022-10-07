import Nav from '../components/Navbar';

it('test navbar component', async () => {
  expect(<Nav />).toMatchSnapshot();
});
