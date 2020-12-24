import axios from 'axios';
import fallbackImg from '../assets/images/washinton-dc-pic.jpg';

const getCityImage = async city => {
  let res;
  const cityToSend = city.replace(/\s+/g, '-').toLowerCase();
  try {
    const cityData = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityToSend}/images`);
    res = cityData.data.photos[0].image.mobile;
  } catch (err) {
    res = fallbackImg;
  }
  return res;
};

export default getCityImage;
