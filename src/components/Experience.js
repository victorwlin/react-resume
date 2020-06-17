import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '75%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  panelDetails1: {
    padding: '0px 16px 8px 16px',
    fontStyle: "italic"
  },
  panelDetails2: {
    padding: '0px 16px 0px 16px'
  },
  bullets: {
    margin: 0
  }
}));


export default function Experience() {
  const classes = useStyles();
  const [panel0, setPanel0] = React.useState(false);
    

  const handleChange = panel => {
    switch (panel) {
      case "panel0":
        if (panel0) {
          setPanel0(false)
        } else {
          setPanel0(true)
        }
        break;
    }
  };


  return (
    <div className={classes.root}>
        
      <Typography variant="h3" align="center">Experience</Typography>
    
      <ExpansionPanel
        expanded={panel0}
        onChange={() => handleChange("panel0")}
      >

        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>
            Finance Business Partner
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Visa, Inc.
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.panelDetails1} fontStyle="italic">Senior Financial Analyst (Feb 2018 - Present)</ExpansionPanelDetails>

        <ExpansionPanelDetails className={classes.panelDetails2}>
          <ul className={classes.bullets}>
            <li>Responsible for the IPVMC geography (Indonesia, Philippines, Vietnam, Myanmar, and Cambodia) with gross revenue of more than $300M, total expenses of more than $40M, and over 100 headcount</li>
            <li>Prepare, justify, present, and manage budgets, forecasts, and outlooks of the full P&L and headcount for each market</li>
            <li>Prepare monthly business reviews, which include commentary and analysis on all variances to budget/forecast, headcount planning, and other business topics</li>
            <li>Monitor the execution of budget and forecast by tracking revenue and revenue drivers, incentive payouts, and project & investment spend</li>
            <li>Maintain cost-effectiveness by creating and organizing a method and procedure for coordinating with all internal business functions to monitor and prioritize projects and activities</li>
            <li>Manage the client deal-making process, including modeling, decision-making, the efficient and optimal use of resources, administration, negotiation, and strategic planning</li>
            <li>Review assumptions and modeling presented by Client Relationship Managers and provide advice on compliance with strategy and policy</li>
            <li>Advise Country Managers, Client Relationship Managers, Business Functions, and others on financial procedures, rules, and controls</li>
            <li>Facilitate teamwork and cooperation by maintaining close relations with and soliciting feedback from stakeholders</li>
            <li>Train new Client Relationship Managers and finance colleagues</li>
          </ul>
        </ExpansionPanelDetails>

      </ExpansionPanel>

    </div>
  );
}