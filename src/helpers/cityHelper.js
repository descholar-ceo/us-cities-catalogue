import axios from 'axios';

const getSampleCities = async () => {
  const sampleCities = await axios.get('https://gist.githubusercontent.com/descholar-ceo/9b11200f0a83417cbdbd2057afbdf855/raw/780763225ed334d85277db5342e0375ce641b75f/sample-us-cities.json')
    .then(res => res.data)
    .catch(err => err.response.data);

  return sampleCities;
};

export default getSampleCities;
