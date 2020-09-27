import React from 'react';
import MapGL, {Marker} from 'react-map-gl';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

function App() {
  const latitude = 19.0189285;
  const longitude = -98.242059;

  //useEffect(() => {
    //navigator.geolocation.getCurrentPosition(position => {
      //setLatitude(position.coords.latitude);
      //setLongitude(position.coords.longitude);
    //});
 // });

  return (
    <div>
      <MapGL
        latitude={latitude} longitude={longitude}
        width="100%" height={700} zoom={14}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
       
       >
        <Marker
          latitude={latitude} longitude={longitude}
          offsetLeft={-10} offsetTop={-20}>
          <PersonPinCircleIcon color="secondary" />
        </Marker>
      </MapGL>
    </div>
  );
}

export default App;