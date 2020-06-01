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
    console.log(props);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const projectsClick = () => {
        props.giveRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
  
    return (
        <AppBar position="sticky">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Projects" onClick={() => projectsClick()} />
            <Tab label="Skills" />
            <Tab label="Experience" />
          </Tabs>
        </AppBar>
    );
};

export default Bar;