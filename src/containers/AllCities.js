import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCitiesAction } from '../redux/actions';

const AllCities = ({ getCitiesAction }) => {
  const cities = getCitiesAction();
  console.log(cities);
  return (
    <div className="global-container">
      <h1>Hello guys!</h1>
    </div>
  );
};

AllCities.propTypes = {
  getCitiesAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ cities: state.cities });

export default connect(mapStateToProps, { getCitiesAction })(AllCities);
