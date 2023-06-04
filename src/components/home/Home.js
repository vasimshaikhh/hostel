import { Container } from '@mui/material';
import React from 'react'
import Section0 from './pages/Section0';
import Section1Cards from './pages/Section1Cards';
import Section2Card from './pages/Section2Card';
import Section3 from './pages/Section3';
import Section4PhotosofOurRooms from './pages/Section4PhotosofOurRooms';
const Home = () => {
  return (
    <>
      <Section0/>
      <Container maxWidth='md' sx={{mt:'3rem'}}>
        <Section1Cards />
      </Container>

      <Section2Card />
      <Section3 />
      <Section4PhotosofOurRooms/>
    </>
  );
}

export default Home
