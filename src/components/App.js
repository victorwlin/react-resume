import React, { useRef } from 'react';

import { Grid } from '@material-ui/core';

import Title from "./Title";
import Bar from "./Bar";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  
  return (
    <Grid container>
      <Title />
      <Bar giveSkillsRef={skillsRef} giveProjectsRef={projectsRef} giveEducationRef={educationRef} giveExperienceRef={experienceRef} />
      <Skills getRef={skillsRef} />
      <Projects getRef={projectsRef} />
      <Education getRef={educationRef} />
      <Experience getRef={experienceRef} />
    </Grid>
  );
}

export default App;