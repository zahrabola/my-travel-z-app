import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import {GetPlacesData} from './Data/TravelApi';


function App() {
const [places, setPlaces] = useState([]);
const [coordinates, setCoordinates] = useState({}) /* empty object */
const [bounds,   setBounds] = useState(null)


/* useeffect happens at start to get loacation of user*/

useEffect(() => {
navigator.geolocation.getCurrentPosition(({
  coordinates: {latitude, logitude}
}) => {
  setCoordinates({lat : latitude, lng : logitude});
})
}, []);
  /* useEffect for Travel and weather */
  useEffect( () => {
    GetPlacesData(bounds.sw, bounds.ne)
    .then((data) => {
      console.log(data)
setPlaces(data)
    })
  }, []);


  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width: '100%'}}>
          <Grid item xs={12} md={4}>
          <List />
          </Grid>
          <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map 
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          />
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default App;
