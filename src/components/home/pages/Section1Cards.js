import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Stack } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HotelIcon from "@mui/icons-material/Hotel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Section1Cards() {
  return (
    
    <Grid container spacing={2}>
      <Grid item xs={12} xl={6} lg={6}>
        <Card sx={{ maxWidth: "100%", height: "28rem" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bed in 6-Bed Room with Shared Bathroom
            </Typography>

            <Stack direction={"row"} spacing={3}>
              <Stack direction="row" spacing={1}>
                <PermIdentityIcon />
                <Typography>2 Sleeps</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <HotelIcon />
                <Typography>Single Bunk Bed</Typography>
              </Stack>
            </Stack>
            <Stack direction='row'>
              <Typography gutterBottom variant="body2" sx={{ mt: '0.5rem' }} component="div">
              See Availability
              </Typography>
              <ArrowForwardIcon sx={{ mt:'7px',ml:'0.4rem'}} />
                 </Stack>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} xl={6} lg={6}>
        <Card sx={{ maxWidth: "100%", height: "28rem" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bed in 6-Bed Room with Shared Bathroom
            </Typography>

            <Stack direction={"row"} spacing={3}>
              <Stack direction="row" spacing={1}>
                <PermIdentityIcon />
                <Typography>2 Sleeps</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <HotelIcon />
                <Typography>Single Bunk Bed</Typography>
              </Stack>
            </Stack>
            <Stack direction='row'>
              <Typography gutterBottom variant="body2" sx={{ mt: '0.5rem' }} component="div">
              See Availability
              </Typography>
              <ArrowForwardIcon sx={{ mt:'7px',ml:'0.4rem'}} />
                 </Stack>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
     
    </Grid>
  );
}
