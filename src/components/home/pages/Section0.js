import React from 'react'
import Carousel from "react-material-ui-carousel";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import image1 from "../../../asset/image1.jpg";



const Section0 = () => {
  return (
    <Box
      sx={{
        mt: "0rem",
        backgroundImage: `url(${image1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "center",
        backgroundSize: "cover",
      }}
    >
      <Carousel>
        <Box
          sx={{
            mt: "3rem",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { lg: "100vh", md: "80vh", sm: "100vh", xs: "100vh" },
          }}
        >
          <Stack direction={"column"} spacing={{lg:15,xs:2,sm:2,md:'13'}} justifyContent='center' alignItems={'center'}>
            <Typography variant="h3">
              Select Your Favouroite Hostel by Your Own{" "}
            </Typography>
            <Button variant="contained" sx={{ width: "15rem", height: " 3rem",borderRadius:'1rem' }}>
              {" "}
              View Rooms
            </Button>
          </Stack>
        </Box>
      </Carousel>
    </Box>
  );
}

export default Section0 
