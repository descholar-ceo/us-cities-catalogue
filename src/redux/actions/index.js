import axios from 'axios';
import { FILTER_CITY, GET_ALL_CITIES } from './actionsTypes';

export const getCitiesAction = async () => {
  const baseApiUrl = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const cities = await axios.get(baseApiUrl)
    .then(result => result.data)
    .catch(err => err.response.data);

  return ({
    type: GET_ALL_CITIES,
    cities,
  });
};

export const filterCity = filter => ({
  type: FILTER_CITY,
  filter,
});
