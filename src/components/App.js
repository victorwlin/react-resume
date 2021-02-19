import React, { useRef } from 'react';

import { Grid } from '@material-ui/core';

import Title from "./Title";
import Bar from "./Bar";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  
  return (
    <Grid container>
      <Title />
      <Bar giveSkillsRef={skillsRef} giveProjectsRef={projectsRef} giveExperienceRef={experienceRef} />
      <Skills getRef={skillsRef} />
      <Projects getRef={projectsRef} />
      <Experience getRef={experienceRef} />
    </Grid>
  );
}

export default App;