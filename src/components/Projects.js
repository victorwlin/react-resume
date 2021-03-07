import React from 'react';

import { Typography, CardActions, Button, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import projectCards from "./projectCards";

const useStyles = makeStyles({
    media: {
      height: 0,
      paddingTop: "100%"
    },
    projects: {
        paddingTop: 50
    }
});

function Projects(props) {
    const classes = useStyles();

    const showProjectCards = projectCards => {
        return projectCards.map(el => {
            return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={el.title}>
            <Card>
            <CardHeader title={el.title} subheader={el.framework} />
            <CardActionArea href={el.live}>
                <CardMedia
                    className={classes.media}
                    image={el.img}
                    title={el.title}
                />
                <CardContent className={classes.content}>
                    <Typography variant="body2" color="textSecondary">
                        {el.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="secondary" href={el.live}>
                Live App
                </Button>
                <Button size="small" color="secondary" href={el.repo}>
                Repository
                </Button>
            </CardActions>

            </Card>
            </Grid>
            );
        });
    };

    return (
        <Grid item container xs={12} ref={props.getRef} className={classes.projects}>
            
            <Grid item xs={12}>
                <Typography
                    variant="h3"
                    align="center"
                >
                    Projects
                </Typography>
            </Grid>
            
            <Grid item xs={false} sm={2} lg={3} />

            <Grid item container xs={12} sm={8} lg={6} spacing={1}>
                {showProjectCards(projectCards)}
            </Grid>

            <Grid item xs={false} sm={2} lg={3} />

        </Grid>
    );
}

export default Projects;