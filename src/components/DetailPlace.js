import { Card, CardActions, CardContent, CardMedia,Box, Chip, Rating, Typography, Button } from "@mui/material"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const DetailPlace = ({place}) => {
    return (
<Card  elevation={6} sx={{margin:1, display:'inline-block'}}>
    <CardMedia sx={{ height: 350}}/>
    <CardContent>
        <Typography  gutterBottom variant="h5">
            name {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
            <Rating name="read-only" readOnly/>
            <Typography component="legend"> review </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
            <Typography component="legend">  Ranking  </Typography>
            <Typography gutterBottom variant="subtitle1"> place ranking </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
            <Typography component="legend">Price</Typography>
            <Typography gutterBottom variant="subtitle1"> price ranking </Typography>
        </Box>
        {/* */}
        <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            image
            <Typography variant="subtitle2"> display name</Typography>
        </Box>
         {/* */}
        <Chip sx={{ margin: '5px 5px 5px 0'}}/>
         {/* */}
         <Typography gutterBottom variant="body2" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',}}>
            <LocalPhoneIcon />
            phone
         </Typography>
    </CardContent>
       {/* */}
       <CardActions>
        <Button size="small" color="primary" > Trip advisor</Button>
        <Button size="small" color="primary">Website </Button>
       </CardActions>
</Card>
    )
}
export default DetailPlace