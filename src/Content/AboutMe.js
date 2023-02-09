import { Grid, Box, Avatar } from "@mui/material";

export const AboutMe = (
  <Grid container spacing={0} columns={12}>
    <Grid xs={6}>
      <Avatar
        alt="Van Phan"
        src="aboutme.png"
        sx={{ width: 200, height: 200, marginLeft: 5 }}
      />
    </Grid>
    <Grid xs={6}>
      <Box sx={{ textAlign: 'left' }} className="small">
        <p>
          <code>
            Hi! I'm Van, a Developer with background in Ruby on Rails and React. I worked with various technologies such as remote servers, Bluetooth beacons, and build/manage features for government projects.
            <br />
            <br />
            I love traveling. My work has taken me to places like New Zealand, Australia, and Guatemala.
            My favorite places to go for personal trips are Japan and Korea.
          </code>
        </p>
      </Box>
    </Grid>
  </Grid>
);