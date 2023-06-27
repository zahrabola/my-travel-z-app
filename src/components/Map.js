import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography } from "@mui/material";
//import useMediaQuery from '@mui/material/useMediaQuery';
//import Rating from '@mui/material/Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';
/////Api key ------ AIzaSyAxo2KYzbgeRf_PS74a3Z3P6wEhOldYhno
////https://console.cloud.google.com/google/maps-apis/credentials?project=zahratraveladvisor


///style 
const MapContainer = styled('div')(( ) => ({
    position: 'relative',
    height: '85vh',
    width: '100%',
  }));
  
  const MarkerContainer = styled('div')(( ) => ({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': { zIndex: 2 },
  }));


const Map = ({setCoordinates, setBounds,coordinates}) => {
    ///const matchesmobile = useMediaQuery('(min-width:600px)');
    ////const coordinates = { lat: 0, lng: 0};
    return (
        <MapContainer>
            {/*33min google map create 
            maps javascript api */}
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAxo2KYzbgeRf_PS74a3Z3P6wEhOldYhno'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50,50]}
            options={''}
            onChange={(event) => {
              console.log(event)
              setCoordinates({ lat:event.center.lat, lng: event.center.lng});
              setBounds({ne:  event.marginBounds.ne, sw: event.marginBounds.sw })
            }}
           
            >
                <MarkerContainer>
                  <LocationOnIcon />
                  <Paper>
                    <Typography>
                        img
                        rating
                    </Typography>
                  </Paper>
                </MarkerContainer>
            </GoogleMapReact>
        </MapContainer>

    )
}
export default Map