import PropTypes from 'prop-types';

const Details = ({ match: { params } }) => {
  // const { city: mCity } = city;
  console.log(params);
  return (
    <h1>mCity</h1>
  );
};

Details.propTypes = {
  // city: PropTypes.shape({
  //   city: PropTypes.string,
  //   population: PropTypes.string,
  //   growth_from_2000_to_2013: PropTypes.string,
  //   latitude: PropTypes.number,
  //   longitude: PropTypes.number,
  //   rank: PropTypes.string,
  //   state: PropTypes.string,
  // }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf({
      city: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
