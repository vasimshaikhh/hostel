import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import bedImg from '../../../asset/bedImg.jpg'

const Section3 = () => {
    return (
      <>
        <Grid container sx={{ mt: "1rem" }}>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Container
              maxWidth={"sm"}
              sx={{ mt: { lg: "5rem", md: "5rem", xs: "1rem", sm: "1rem" } }}
            >
              <Paper
                sx={{
                  backgroundColor: "#f7fafd",
                  height: {lg:"18rem",md:'18rem',xs:'10rem',sm:'10rem'},
                  width: "100%",
                }}
              >
                <Typography sx={{ typography: { sm: "h4", xs: "h4",lg:'h2',md:'h2' } }}>
                  <strong>
                    Hosteller — amazing hostel for the free spirited traveler
                  </strong>
                </Typography>
              </Paper>
            </Container>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box
              component={"img"}
              src={bedImg}
              sx={{ width: "100%", height:{lg:"26rem",md:'26rem',xs:'15rem',sm:'15rem'} }}
            />
          </Grid>
        </Grid>
      </>
    );
}

export default Section3
