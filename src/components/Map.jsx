import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from '../../config'

function Map({ data }) {
    const mapStyles={
        height:'50vh',
        width:'100%'
    }
    const defaultCenter = {
        lat : parseFloat( data.lat ),
        lng : parseFloat( data.lng )
    }
  return (
    <LoadScript googleMapsApiKey={config.googleMapsApiKey}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
            <Marker position={defaultCenter}/>
        </GoogleMap>
    </LoadScript>
  )
}

export default Map