import axios from 'axios';
import { BASE_API } from '../../assets/samples/apis';
import { FILTER_CITY, GET_ALL_CITIES } from './actionsTypes';

export const getCitiesAction = () => async dispatch => {
  const sampleCitiesURL = BASE_API;
  const sampleCities = await axios.get(sampleCitiesURL);
  dispatch({ cities: sampleCities.data, type: GET_ALL_CITIES });
};

export const filterCity = mFilter => ({
  mFilter,
  type: FILTER_CITY,
});
