import React, { useState, useRef } from 'react';

import { Typography, Grid, AppBar, Tab, Tabs } from '@material-ui/core';

import Title from "./Title";
import Bar from "./Bar";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

function App() {
  const projectsRef = useRef(null);
  
  return (
    <Grid container>
      <Title />
      <Bar giveRef={projectsRef} />
      <Skills />
      <Projects getRef={projectsRef} />
      <Experience />
    </Grid>
  );
}

export default App;