import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box, Button, Card, Paper, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import image1 from "../../../asset/image1.jpg";
import { Link } from "react-router-dom";
const Section1 = () => {
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
          <Stack
            direction={"column"}
            spacing={{ lg: 15, xs: 2, sm: 2, md: "13" }}
            justifyContent="center"
            alignItems={"center"}
          >
            <Typography variant="h3">Experience what we are up to</Typography>
            <Stack
              direction={"row"}
              elevation={3}
              sx={{
                width: "50%",
                height: "3rem",
                backgroundColor: "#1976d2",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography variant="h5">Home</Typography>
              </Link>
              <Typography variant="h5"> / </Typography>
              <Typography variant="h5">
                <strong>Rooms</strong>{" "}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Carousel>
    </Box>
  );
};

export default Section1;
