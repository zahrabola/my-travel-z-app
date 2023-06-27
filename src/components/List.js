import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState,  } from 'react';
import DetailPlace from "./DetailPlace";
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

///style 
const ListContainer = styled('div')(( ) => ({
    padding: '25px'
  }));
  
  const ListLoading = styled('div')(( ) => ({
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
  }));




const List = ({places}) => {
    const theme = createTheme();

const[type, setType]= useState('restaurants')
const [rate, setRate] = useState('')

/*dummy variable 
const places = [
    {name: 'fun place'},
    {name: 'cool place'},
    {name: 'boring place'},
    {name: 'fun place'},
    {name: 'cool place'},
    {name: 'boring place'},
] */

    return (
<ListContainer>
    <Typography> Restaurant, Cafes and Bars near you </Typography>
    <ListLoading>
        <CircularProgress />
    </ListLoading>
    <FormControl  sx={{  margin: theme.spacing(1),  minWidth: 120, marginBottom: '30px', }}>
        <InputLabel>Type</InputLabel>
        <Select id='type' label='Type' value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
    </FormControl>
    {/* */}
    <FormControl  sx={{  margin: theme.spacing(1),  minWidth: 120, marginBottom: '30px', }}>
        <InputLabel>Rating</InputLabel>
        <Select id='rating' label='Rating' value={rate} onChange={(event) => setRate (event.target.value)}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="3">Above 3.0</MenuItem>
            <MenuItem value="4">Above 4.0</MenuItem>
            <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
    </FormControl>
      {/*?. means only when you have places map over them*/}
      <Grid container sx={{height: '75vh', overflow: 'auto'}} spacing={3}>

       {places?.map((place, i) => (
        <Grid item xs={12} key={i}>
 <DetailPlace place={place} />
        </Grid>
       ))}
      </Grid>
</ListContainer>
    )
}
export default List