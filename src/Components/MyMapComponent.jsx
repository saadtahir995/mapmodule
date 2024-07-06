import React from 'react';
import { GoogleMap, LoadScript,InfoWindow } from '@react-google-maps/api';
import {useState} from 'react';


const containerStyle = {
  width: '80vw',
  height: '80vh'
};

const MyMapComponent = () => {

const apiKey = 'AIzaSyD7lpMaGVdeGSt-aHGo51TEPclkoWatMGg'; // Replace with your Google Maps API key
  const [selected, setSelected] = React.useState(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}


      >

        
        {selected && (
          <InfoWindow
            position={center}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>Marker Info</h2>
              <p>This is the info window content</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;