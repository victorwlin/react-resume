import React from "react";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
}));

const Bar = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const skillsClick = () => {
      props.giveSkillsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };

    const projectsClick = () => {
      props.giveProjectsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
      });
    };

    const experienceClick = () => {
      props.giveExperienceRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
      });
    };
  
    return (
        <AppBar position="sticky">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Skills" onClick={() => skillsClick()} />
            <Tab label="Projects" onClick={() => projectsClick()} />
            <Tab label="Experience" onClick={() => experienceClick()} />
          </Tabs>
        </AppBar>
    );
};

export default Bar;