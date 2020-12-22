import axios from 'axios';
import { DISPLAY_DETAILS_OF_A_CITY, FILTER_CITY, GET_ALL_CITIES } from './actionsTypes';

export const getCitiesAction = () => dispatch => {
  const sampleCitiesURL = 'https://gist.githubusercontent.com/descholar-ceo/9b11200f0a83417cbdbd2057afbdf855/raw/f024c7a831ac266ce0dea53683853daf4b6a6ab5/us-cities.json';
  axios.get(sampleCitiesURL)
    .then(result => {
      dispatch({
        cities: result.data,
        type: GET_ALL_CITIES,
      });
    })
    .catch(err => err.response.data);
};

export const filterCity = filter => ({
  filter,
  type: FILTER_CITY,
});

export const displayOneCity = city => ({
  type: DISPLAY_DETAILS_OF_A_CITY,
  city,
});
