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
    <div className="city-details-conatiner">
      <img src={sampleBg} alt="washington" />
      <div>
        <p>
          <span>City: </span>
          <span>{city}</span>
        </p>
        <p>
          <span>State: </span>
          <span>{state}</span>
        </p>
        <p>
          <span>Rank: </span>
          <span>{rank}</span>
        </p>
        <p className="population-p">
          <span>Population: </span>
          <span>{population}</span>
        </p>
        <p className="growth-p">
          <span>Growth between 2000 and 2013: </span>
          <span>{growthFrom2000To2013}</span>
        </p>
        <p className="location-p">
          <span>Location: </span>
          <span>{`(${latitude}, ${longitude})`}</span>
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = state => ({ cities: state.cities });

export default connect(mapStateToProps, null)(Details);
