import React from 'react';
import { GoogleMap, LoadScript,MarkerF } from '@react-google-maps/api';
import {useState} from 'react';


const containerStyle = {
  width: '80vw',
  height: '80vh'
};

const MyMapComponent = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  React.useEffect(() => {
    async function getGeolocation(apiKey) {
      const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`
    ;
      try {
        const response = await fetch(url, {
          method: 'POST'
        });
        const data = await response.json();
        const location = data.location;
        setCenter({ lat: location.lat, lng: location.lng });
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      }
    }
    getGeolocation(apiKey);
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}>
        <MarkerF
          position={center}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;