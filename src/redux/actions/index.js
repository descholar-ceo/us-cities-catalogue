import axios from 'axios';
import { FILTER_CITY, GET_ALL_CITIES } from './actionsTypes';

export const getCitiesAction = () => async dispatch => {
  const sampleCitiesURL = 'https://gist.githubusercontent.com/descholar-ceo/df8c5c0d68e47798e1b0435163b65e5b/raw/45a95b9f38aef95af9be55da0db885142407ee21/all-us-cities.json';
  const sampleCities = await axios.get(sampleCitiesURL);
  dispatch({ cities: sampleCities.data, type: GET_ALL_CITIES });
};

export const getCityImage = (city, fallbackImg) => async dispatch => {
  let res;
  const cityToSend = city.replace(/\s+/g, '-').toLowerCase();
  try {
    const cityData = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityToSend}/images`);
    res = cityData.data.photos[0].image.mobile;
  } catch (err) {
    res = fallbackImg;
  }
  dispatch({ city, bgImg: res });
};

export const filterCity = mFilter => ({
  mFilter,
  type: FILTER_CITY,
});
