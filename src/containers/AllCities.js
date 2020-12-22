import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getCitiesAction } from '../redux/actions';

const AllCities = () => (
  <div className="global-container">
    <h1>Hello guys!</h1>
  </div>
);
// AllCities.propTypes = {
//   getAllCities: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({ cities: state.cities });

const mapDispatchToProps = dispatch => ({
  getAllCities: () => dispatch(getCitiesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCities);
