import { Card, Container } from '@mui/material'
import React from 'react'
import styled from '@mui/material/styles/styled'
import kitchen from '../../../asset/kitchen.jpg'
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
const StyledCard = styled(Card)({
  background: `url(${kitchen})`,
  height: "30rem",
  width: "100%",
  display: "flex",
    justifyContent: "center",
  alignItems:'center',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
    backgroundPosition: "center",
    '&:hover': {
       transform: 'scale(1.03)'
  }
});


const Section4 = () => {
  return (
    <Container maxWidth={"md"} sx={{ mt: "3rem" }}>
      <StyledCard>
        <a href="https://www.youtube.com/watch?v=CVwndjSYAys" target="_blank">
          <PlayCircleOutlineIcon
            sx={{
              width: "4rem",
              height: "10rem",
              "&:hover": { transform: "scale(1.5)" },
            }}
          />
        </a>
      </StyledCard>
    </Container>
  );
}

export default Section4
