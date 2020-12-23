import AllCities from '../containers/AllCities';
import NavBar from '../containers/NavBar';

const Home = () => (
  <>
    <NavBar renderedComponent="all-cities" />
    <AllCities />
  </>
);

export default Home;
