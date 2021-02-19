import React from 'react';

import { Typography, CardActions, Button, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import react from "../static/react.png";

const useStyles = makeStyles({
    media: {
      height: 0,
      paddingTop: "100%"
    },
    education: {
        paddingTop: 50
    }
});

function Education(props) {
    const classes = useStyles();

    return (
        <Grid item container xs={12} ref={props.getRef} className={classes.education}>
            
            <Grid item xs={12}>
                <Typography
                    variant="h3"
                    align="center"
                >
                    Education
                </Typography>
            </Grid>
            
            <Grid item xs={false} sm={2} lg={3} />

            <Grid item container xs={12} sm={8} lg={6} spacing={1}>
            
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="University of California, Davis" subheader="Davis, CA, USA" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={react}
                                title="UC Davis"
                            />
                            <CardContent className={classes.content}>
                                <Typography variant="body2" color="textSecondary">Master's in Finance</Typography>
                                <Typography variant="body2" color="textSecondary">Graduated May 2012</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>

            <Grid item xs={false} sm={2} lg={3} />

        </Grid>
    );
}

export default Education;