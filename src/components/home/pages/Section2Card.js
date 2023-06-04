import { Button, Card, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const Section2Card = () => {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          height: {lg:"10rem",md:'10rem',xs:'27rem'},
          mt: " 3rem",
          backgroundColor: "#1976d2",
        }}
      >
        <Container
          sx={{ display: "flex", justifyContent: "center", display: "block" }}
        >
          <Stack
            direction={"column"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Stack
              direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
              spacing={{lg:4,md:4,xs:2,sm:2}}
              justifyContent={"space-evenly"}
                          alignItems="center"
              sx={{ mt: '1rem' }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Typography variant={"h6"}>Stay Longer Save More</Typography>
              <Typography variant={"h6"}>
                It's simple: the longer you stay, the more you save!
              </Typography>
              <Typography variant={"h6"}>
                Save up to 30% on daily rate for stays longer than 14 nights{" "}
              </Typography>
              <Typography variant={"h6"}>
                Save up to 20% off the nightly rate on stays between 7-14 nights{" "}
              </Typography>
            </Stack>
            <Button variant={"contained"} sx={{mt:'2rem'}}>Choose Room</Button>
          </Stack>
        </Container>
      </Card>
    </>
  );
}

export default Section2Card
