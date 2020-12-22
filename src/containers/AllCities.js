import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import City from '../components/City';

const AllCities = ({ cities }) => {
  const cityRows = cities.map((currCity, index) => <City key={`city-num${index + 1}`} city={currCity} />);
  return (
    <div className="global-container">
      {cityRows}
    </div>
  );
};

AllCities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ cities: state.cities });

export default connect(mapStateToProps, null)(AllCities);
