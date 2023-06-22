import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState, useEffect, createRef } from 'react';
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




const List = () => {
    const theme = createTheme();


    return (
<ListContainer>
    <Typography> Restaurant, Cafes and Bars near you </Typography>
    <ListLoading>
        <CircularProgress />
    </ListLoading>
    <FormControl  sx={{  margin: theme.spacing(1),  minWidth: 120, marginBottom: '30px', }}>
        <InputLabel>Type</InputLabel>
        <Select id='type' label='Type' >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
    </FormControl>
    {/* */}
    <FormControl  sx={{  margin: theme.spacing(1),  minWidth: 120, marginBottom: '30px', }}>
        <InputLabel>Rating</InputLabel>
        <Select id='rating' label='Rating' >
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