import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import sampleBg from '../assets/images/washinton-dc-pic.jpg';

const Details = ({ cities, match: { params } }) => {
  const { city: selectedCity } = params;
  const myCity = cities.filter(city => city.city === selectedCity);
  const {
    city,
    population,
    growth_from_2000_to_2013: growthFrom2000To2013,
    latitude,
    longitude,
    rank,
    state,
  } = myCity[0];
  return (
    <div className="list-one-city">
      <img src={sampleBg} alt="washington" />
      <h1>{city}</h1>
      <h2>{population}</h2>
      <h3>{growthFrom2000To2013}</h3>
      <h4>{`(${latitude}, ${longitude})`}</h4>
      <h5>{rank}</h5>
      <h6>{state}</h6>
    </div>
  );
};

Details.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = state => ({ cities: state.cities });

export default connect(mapStateToProps, null)(Details);
