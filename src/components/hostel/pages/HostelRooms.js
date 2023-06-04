import { Card, Container, Grid,Box, Typography, Stack,Button } from '@mui/material'
import React from 'react'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import bedImg from "../../../asset/bedImg.jpg";
import HotelTwoToneIcon from "@mui/icons-material/HotelTwoTone";
import { Link, useNavigate } from 'react-router-dom';
import { useHostelDetailsQuery } from '../../../services/api';
const Section2Rooms = () => {
  const navigate = useNavigate();

  const { data, isSuccess, isError } = useHostelDetailsQuery();

  console.log(data,'sdfsdfdf')



  return (
    <Container sx={{mt:'3em'}}>
      <Grid container spacing={2}>
        {isSuccess === true ? data?.map((element, i) => {
          return (
            <Grid key={i} item xs={12}>
            <Card>
              <Grid container sx={{ height:{lg:"15rem",md:'15rem',xs:'42rem',sm:'42rem'} }}>
                <Grid item lg={4} md={4} sm={12} xs={12} sx={{ display: "flex", justifyContent: "start" }}
                >
                  <Box
                    component={"img"}
                    sx={{ width: "100%", height: "100%" }}
                    // src={bedImg}
                    src={element.image}
                  />
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12} sx={{ display: "flex", justifyContent: "center" }} >
                  <Box sx={{ margin: "2rem" }}>
                    <Stack spacing={3}>
                      <Typography variant="h5"> <strong>{element.name}</strong> </Typography>
                      <Typography variant="body1">
                       {element.details}
                      </Typography>
                      <Stack direction={"row"} spacing={2}>
                        <Stack direction={"row"} spacing={1}>
                          <PersonOutlineIcon />
                          <Typography variant="body1">2 Sleeps</Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={1}>
                          <HotelTwoToneIcon />
                          <Typography variant="body1">2 Sleeps</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item lg={4}md={4} sm={12} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                                <Stack direction={{lg:'column',md:'column',xs:'column'}} spacing={3} sx={{margin:'2rem'}}>
                                   <Link to={'/hostel/room'} state={{id : element.id}}>
                                  <Typography variant='h5'><strong>{element.discount}</strong></Typography>
                                    {/* <Typography variant='h6'><strong>$100</strong>/ 7 night</Typography> */}
                                    <Button variant='contained'>Book now</Button>
                                    </Link>
                                </Stack>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          )
        }) : null}
       
      
      </Grid>
    </Container>
  );
}

export default Section2Rooms
