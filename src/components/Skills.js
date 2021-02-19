import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import react from "../static/react.png";
import redux from "../static/redux.svg";
import materialUI from "../static/materialUI.svg";
import javascript from "../static/javascript.svg";
import html from "../static/html.svg";
import css from "../static/css.svg";
import git from "../static/git.svg";
import firebase from "../static/firebase.png";
import semanticUI from "../static/semanticUI.svg";

const useStyles = makeStyles({
    media: {
      height: 0,
      paddingTop: "100%"
    },
    content: {
        padding: 0,
    },
    skills: {
        paddingTop: 50
    }
});

function Skills(props) {
    const classes = useStyles();
  
    const skillCards = [
        {title: "React", img: react},
        {title: "Redux", img: redux},
        {title: "Material-UI", img: materialUI},
        {title: "JavaScript", img: javascript},
        {title: "HTML", img: html},
        {title: "CSS", img: css},
        {title: "Git", img: git},
        {title: "Firebase", img: firebase},
        {title: "Semantic-UI", img: semanticUI},
    ];

    const showSkillCards = skillCards => {
        return skillCards.map(el => {
            return (
            <Grid item xs={4} sm={3} md={2} key={el.title}>
            <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={el.img}
                    title={el.title}
                />
                <CardContent className={classes.content}>
                    <Typography variant="subtitle2" align="center">
                        {el.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </Grid>
            );
        });
    };

    return (
        <Grid item container xs={12} ref={props.getRef} className={classes.skills}>
            
            <Grid item xs={12}>
                <Typography variant="h3" align="center">Skills</Typography>
            </Grid>
            
            <Grid item xs={1} sm={2} lg={3} />

            <Grid item container xs={10} sm={8} lg={6} spacing={1}>
                {showSkillCards(skillCards)}
            </Grid>

            <Grid item xs={1} sm={2} lg={3} />

        </Grid>
    );
}

export default Skills;