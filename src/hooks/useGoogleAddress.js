import { useState, useEffect } from 'react'
import Axios from 'axios'

const useGoogleAddress = (address) => {
    const [map, setMap] = useState({})
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_GEOCODING_API_KEY}`
    useEffect(() => {
        async function handler(){
            const response = await Axios(API)
            console.log(response.data)
            setMap(response.data.results[0].geometry.location) 
               
        }
        handler()
    },[])
    return map
}
export default useGoogleAddress