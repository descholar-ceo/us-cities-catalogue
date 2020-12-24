import axios from 'axios';
import fallbackImg from '../assets/images/washinton-dc-pic.jpg';

const getCityData = async city => {
  let res;
  const cityToSend = city.replace(/\s+/g, '-').toLowerCase();
  try {
    const cityData = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityToSend}/images`);
    res = cityData.data.photos[0].image.mobile;
    console.log({ res });
  } catch (err) {
    res = fallbackImg;
    console.log(err.response.data);
  }
  return res;

  // const cityData = fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${city}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCmKsMOokFjKKOQ5iBPIscE0-u234aNxMs`, { mode: 'no-cors' })
  //   .then(response => (response.json())).then(res => {
  //     console.log(res);
  //     return res;
  //   });
  // return cityData;
};

export default getCityData;
