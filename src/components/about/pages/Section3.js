import { Box, Card, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const Section3 = () => {
  return (
    <Container maxWidth={"lg"} sx={{ mt: "4rem" }}>
      <Card SX={{ width: "100%" }}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          SX={{ width: "100%" }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography sx={{color:'#1976d2', typography: { sm: "h5", xs: "h5",lg:'h3',md:'h3' } }}>
              <strong>240+</strong>
            </Typography>
            <Typography variant="body2" >
              Consequat interdum varius sit amet mattis vulputate enim nulla
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography sx={{color:'#1976d2', typography: { sm: "h5", xs: "h5",lg:'h3',md:'h3' } }}>
              <strong>240+</strong>
            </Typography>
            <Typography variant="body2" >
              Consequat interdum varius sit amet mattis vulputate enim nulla
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography sx={{color:'#1976d2', typography: { sm: "h5", xs: "h5",lg:'h3',md:'h3' } }}>
              <strong>240+</strong>
            </Typography>
            <Typography variant="body2" >
              Consequat interdum varius sit amet mattis vulputate enim nulla
            </Typography>
          </Box>
              </Stack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          SX={{ width: "100%" }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography sx={{color:'#1976d2', typography: { sm: "h5", xs: "h5",lg:'h3',md:'h3' } }}>
              <strong>240+</strong>
            </Typography>
            <Typography variant="body2" >
              Consequat interdum varius sit amet mattis vulputate enim nulla
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography sx={{color:'#1976d2', typography: { sm: "h5", xs: "h5",lg:'h3',md:'h3' } }}>
              <strong>240+</strong>
            </Typography>
            <Typography variant="body2" >
              Consequat interdum varius sit amet mattis vulputate enim nulla
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography sx={{color:'#1976d2', typography: { sm: "h5", xs: "h5",lg:'h3',md:'h3' } }}>
              <strong>240+</strong>
            </Typography>
            <Typography variant="body2" >
              Consequat interdum varius sit amet mattis vulputate enim nulla
            </Typography>
          </Box>
              </Stack>
        
     
      </Card>
    </Container>
  );
}

export default Section3
