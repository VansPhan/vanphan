import { Box, Container } from "@mui/system";
import { Divider, Chip } from "@mui/material";
import { AboutMe } from "../Content/AboutMe";
import Career from "./Career";

function Home() {

  return (
    <Container>
      <Box mb={4}>
        <Divider textAlign="right">
          <Chip 
            variant="outlined"
            label="VAN PHAN"
            sx={{color: 'white'}}
          />
        </Divider>
      </Box>
      <Box mb={4}>
        { AboutMe }
      </Box>
      <Box mb={4}>
        <Divider textAlign="center">
          <Chip
            label="EXPERIENCE"
            variant="outlined"
            sx={{color: 'white'}}
          />
        </Divider>
      </Box>
      <Box mb={4}>
        <Career />
      </Box>
    </Container>
  )
}

export default Home;