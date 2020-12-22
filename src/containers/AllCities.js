import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AllCities = ({ cities }) => {
  console.log(cities);
  return (
    <div className="global-container">
      <h1>Hello guys!</h1>
    </div>
  );
};

AllCities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ cities: state.cities });

export default connect(mapStateToProps, null)(AllCities);
