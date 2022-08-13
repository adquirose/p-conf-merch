import { useState, useEffect } from 'react';
import Axios from 'axios';
import config from '../../config';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.googleMapsGeocodingApiKey}`;
  useEffect(() => {
    async function handler() {
      const response = await Axios(API);
      console.log(response.data);
      setMap(response.data.results[0].geometry.location);
    }
    handler();
  }, []);
  return map;
};
export default useGoogleAddress;
