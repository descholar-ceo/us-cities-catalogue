import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
// import sampleBg from '../assets/images/washinton-dc-pic.jpg';
import Loading from '../components/Loading';
import NavBar from '../containers/NavBar';
import getCityImage from '../helpers/cityHelper';

const Details = ({ cities, match: { params } }) => {
  const { city: selectedCity } = params;
  const [state, setState] = useState({ cityImg: '' });
  useEffect(async () => {
    const cityImage = await getCityImage(selectedCity);
    setState({ cityImg: cityImage });
  }, []);
  let componentToRender;
  if (Object.keys(cities).length === 0) {
    componentToRender = (<Loading />);
  } else {
    const myCity = cities.filter(city => city.city === selectedCity);
    const {
      city,
      population,
      growth_from_2000_to_2013: growthFrom2000To2013,
      latitude,
      longitude,
      rank,
      state: mState,
    } = myCity[0];
    componentToRender = (
      <div className="city-details-conatiner">
        <img src={state.cityImg} alt="washington" />
        <div>
          <p className="city-p">
            <span>City: </span>
            <span className="city-span">{city}</span>
          </p>
          <p className="state-p">
            <span>State: </span>
            <span>{mState}</span>
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
  }

  return (
    <>
      <NavBar renderedComponent="details" />
      {componentToRender}
    </>
  );
};

Details.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({ cities: state.cityReducer.cities });

export default connect(mapStateToProps, null)(Details);
