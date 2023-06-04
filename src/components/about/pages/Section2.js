import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Section2 = () => {
  return (
    <Container maxWidth={"md"} sx={{ height: "10rem", mt: "3rem" }}>
      <Grid
        container
        sx={{ justifyContent: "start", alignItems: "center" }}
        spacing={5}
      >
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "start", alignItem: "center" }}
        >
          <Typography variant={"h4"}>
            <strong> The main benefits to choose Hosteller</strong>
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography variant={"body2"}>
            Aliquam eleifend mi in nulla. Viverra nibh cras
            wpulvinar mattis nunc
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Section2
