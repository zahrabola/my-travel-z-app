import { CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState, useEffect, createRef } from 'react';
const List = () => {
    return (
<ListContainer>
    <Typography> Restaurant, Cafes and Bars near you </Typography>
    <ListLoading>
        <CircularProgress />
    </ListLoading>
    <FormControl>
        <InputLabel>Type</InputLabel>
        <Select id='type' value={type}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
    </FormControl>
    {/* */}
</ListContainer>
    )
}
export default List