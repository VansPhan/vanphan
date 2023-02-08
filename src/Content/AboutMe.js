import React from "react";
import { Grid } from "@mui/material";

export const AboutMe = (
  <Grid container spacing={2} columns={12}>
    <Grid xs={4}>
      <h1>Van Phan</h1>
    </Grid>
    <Grid xs={8}>
      <p className="small">
        <code>
          I'm a Developer with background in Ruby on Rails and React. I worked with various technologies such as remote servers, Bluetooth beacons, and build/manage features for government projects.
          <br />
          I love traveling. My work has taken me to places like New Zealand, Australia, and Guatemala.
          My favorite places to go for personal trips are Japan and Korea.
        </code>
      </p>
    </Grid>
  </Grid>
);