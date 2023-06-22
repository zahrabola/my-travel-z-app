import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState, useEffect, createRef } from 'react';
import DetailPlace from "./DetailPlace";
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

///style 
const ListContainer = styled('div')(( ) => ({
    
  }));
  
  const ListLoading = styled('div')(( ) => ({
   
  }));




const List = () => {
    const theme = createTheme();


    return (
<ListContainer sx={{padding:'25px'}}>
    <Typography> Restaurant, Cafes and Bars near you </Typography>
    <ListLoading sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <CircularProgress />
    </ListLoading>
    <FormControl  sx={{  margin: theme.spacing(1),  minWidth: 120, marginBottom: '30px', }}>
        <InputLabel>Type</InputLabel>
        <Select id='type' >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
    </FormControl>
    {/* */}
    <FormControl  sx={{  margin: theme.spacing(1),  minWidth: 120, marginBottom: '30px', }}>
        <InputLabel>Rating</InputLabel>
        <Select id='rating' >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="3">Above 3.0</MenuItem>
            <MenuItem value="4">Above 4.0</MenuItem>
            <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
    </FormControl>
      {/* */}
      <Grid container sx={{height: '75vh', overflow: 'auto'}} >
        <DetailPlace />
      </Grid>
</ListContainer>
    )
}
export default List