import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import MailIcon from "@mui/icons-material/Mail";
const DetailPlace = ({ place }) => {
  return (
    <Card elevation={6} sx={{ margin: 1, display: "inline-block", minWidth: 300}}>
      <CardMedia
        sx={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        } /* if statement images is api doesnt have a image */
        title={place.name}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" readOnly value={Number(place.rating)} />
          <Typography component="legend">{place.num_reviews} reviews</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend"> Ranked: </Typography>
          <Typography gutterBottom variant="subtitle1">
            {" "}
            {place.ranking}{" "}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {" "}
            {place.price_level}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="subtitle1">
            {place.description}
          </Typography>
        </Box>

        {/* */}
        {place?.awards?.map((award) => (
          <Box
            display="flex"
            justifyContent="space-between"
            my={1}
            alignItems="center"
          >
            <img src={award.images.small}  alt="imagetwo"/>
            <Typography variant="subtitle2"> {award.display_name}</Typography>
          </Box>
        ))}

        {/* */}
        {place?.cuisine?.map(({name}) => (
            <Chip sx={{ margin: "5px 5px 5px 0" }} key={name} label={name} />
        ))}
        {/* */}
        {place.address && (
          <Typography
          gutterBottom
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <AddLocationIcon />
          {place.address}
        </Typography>
        )}
        
        {/* */}
        {place.phone &&(
             <Typography
             gutterBottom
             variant="body2"
             sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
               marginTop: "10px",
             }}
           >
             <LocalPhoneIcon />
            {place.phone}
           </Typography>
        )}
     
        {/* */}
        {place.email && (
            <Typography
            gutterBottom
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <MailIcon />
            {place.email}
          </Typography>
        )}
      
      </CardContent>
      {/* */}
      <CardActions>
        <Button size="small" color="primary">
          {" "}
          Trip advisor
        </Button>
        <Button size="small" color="primary">
          Website{" "}
        </Button>
      </CardActions>
    </Card>
  );
};
export default DetailPlace;
