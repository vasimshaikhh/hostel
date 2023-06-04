import { Card, Container, Grid,Box, Typography, Stack,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import bedImg from "../../../asset/bedImg.jpg";
import HotelTwoToneIcon from "@mui/icons-material/HotelTwoTone";
import { useLocation } from 'react-router-dom';
import { useRoomsByIdMutation } from '../../../services/api';
const Section2Rooms = () => {
  const[ID,setID] = useState()
  // const location = useLocation();
  const  state = useLocation();

  console.log(state, 'useLocation Hook');
  const hostel_id =state.state?.id;
  console.log(hostel_id, 'id is here')
  const [responseInfo, response] = useRoomsByIdMutation();
  console.log(response,'Response')

  useEffect(() => {
    (async() => {
      await responseInfo(hostel_id)
    })()
},[state])
  
  // useEffect(() => {
  //   if (hostel_id !== undefined || null) {
  //     setID(state.state?.id)
     
  //   }
  //   responseInfo(ID)
  //   console.log(response,'Response')
  // }, [state])
  // console.log(response,'Response')


  // useEffect(() => {
  //   if (hostel_id !== undefined) {
  //     responseInfo(hostel_id)
  //     console.log(response, 'response')
  //   }
  
  // },[hostel_id])
  // useEffect(() => {

  //   fetch('http://localhost:4000/rooms', {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: {
  //       id: 0,
  //     },
  //   }).then((response) => response.json())
  //     .then((responseJson) => {
  //       return responseJson
  //       console.log(responseJson)

  //     }) 
     
  // },[])
 


  // useEffect(() => {
  //   const respon = fetch('http://localhost:4000/hostel/room', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application.json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: hostel_id,
  //   })
  //   console.log(respon,'id')

  // },[])
  
  // useEffect(() => {
  //   (async() => {
  //     if (hostel_id !== null || undefined) {
  //       await responseInfo(hostel_id)
  //       console.log(response,'response')
  //     }
  //   })()
  
  // },[hostel_id])
  
  return (
    <Container sx={{mt:'3em'}}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Card>
            <Grid container sx={{ height:{lg:"15rem",md:'15rem',xs:'35rem'} }}>
              <Grid item lg={4} md={4} sm={12} xs={12}sx={{ display: "flex", justifyContent: "start" }}>
                <Box  component={"img"}  sx={{ width: "100%", height: "100%" }}src={bedImg} />
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12} sx={{ display: "flex", justifyContent: "center" }} >
                <Box sx={{ margin: "2rem" }}>
                  <Stack spacing={3}>
                    <Typography variant="h5"> <strong>Bathroom</strong> </Typography>
                    <Typography variant="body1">
                      Diam phasellus vestibulum lorem sed risus ultricies
                      tristique.
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
                              <Stack direction={{lg:'column',md:'column',xs:'row'}} spacing={3} sx={{margin:'2rem'}}>
                                <Typography variant='h5'><strong>$29</strong>/ 1 night</Typography>
                                  <Typography variant='h6'><strong>$100</strong>/ 7 night</Typography>
                                  <Button variant='contained'>Book now</Button>
                              </Stack>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      
      </Grid>
    </Container>
  );
}

export default Section2Rooms
