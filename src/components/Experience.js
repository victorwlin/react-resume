import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import experiencePanels from "./experiencePanels";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Experience() {
  const classes = useStyles();
  const [panel0, setPanel0] = React.useState(false);
    
  const stateArr = [panel0];
  const stateFuncArr = [setPanel0];

    const experiencePanelsWithState = experiencePanels.map(el => {
        let i = 0;
        return { ...el, state: stateArr[i], setState: stateFuncArr[i]};
    });
    
  const handleChange = () => {
    setPanel0(panel0 ? false : true);
  };

  const showExperiencePanels = experiencePanelsWithState => {
    return experiencePanelsWithState.map(el => {
        return (
            <ExpansionPanel
                expanded={el.state}
                onChange={() => handleChange}
                key={el.role}
            >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              id={el.role}
            >
              <Typography className={classes.heading}>{el.role}</Typography>
              <Typography className={classes.secondaryHeading}>{el.emp}</Typography>
            </ExpansionPanelSummary>
    
            <ExpansionPanelDetails>
                <ul>
                    {
                        el.desc.map(bullet => {
                            return (
                                <li>{bullet}</li>
                            );
                        })
                    }
                </ul>
            </ExpansionPanelDetails>

            </ExpansionPanel>
        );
    });
  };

  return (
    <div className={classes.root}>
        <Typography variant="h3" align="center">Experience</Typography>
      
        {showExperiencePanels(experiencePanels)}

    </div>
  );
}