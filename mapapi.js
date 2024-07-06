import fetch from 'node-fetch';

// Function to get geolocation data
async function getGeolocation(apiKey) {
  const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`
;
  try {
    const response = await fetch(url, {
      method: 'POST'
    });
    const data = await response.json();
    console.log('Geolocation data:', data);
    const location = data.location;
   // console.log('Geolocation data:', location);
    //sconsole.log(`Latitude: ${location.lat}, Longitude: ${location.lng}`);
  } catch (error) {
    console.error('Error fetching geolocation:', error);
  }
}

// Your Google Maps API key
const apiKey = 'AIzaSyD7lpMaGVdeGSt-aHGo51TEPclkoWatMGg';
getGeolocation(apiKey);
