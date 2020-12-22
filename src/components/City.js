import PropTypes from 'prop-types';
import sampleBg from '../assets/images/washinton-dc-pic.jpg';

const City = ({ city }) => {
  const { city: mCity, population } = city;
  return (
    <div className="list-one-city">
      <img src={sampleBg} alt="washington" />
      <div>
        <h1>{mCity}</h1>
        <h2>{population}</h2>
      </div>
    </div>
  );
};

City.propTypes = {
  city: PropTypes.shape({
    city: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
  }).isRequired,
};

export default City;
