import React from "react";

import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    title: {
      height: "100vh"
    },
    header: {
        fontWeight: "bold"
    }
}));

const Title = () => {
    const classes = useStyles();
    
    return (
        <Grid
            container item xs={12}
            className={classes.title}
            alignContent="center"
        >
            
            <Grid item xs={12}>
                <Typography
                    variant="h1"
                    className={classes.header}
                >
                    Victor Lin
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h2">
                    Portfolio and Resume
                </Typography>
            </Grid>

        </Grid>
    );
};

export default Title;