import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: 50
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


export default function Experience(props) {
  const classes = useStyles();
  const [panel0, setPanel0] = React.useState(false);
  const [panel1, setPanel1] = React.useState(false);
  const [panel2, setPanel2] = React.useState(false);
  const [panel3, setPanel3] = React.useState(false);


  const handleChange = panel => {
    switch (panel) {
      case "panel0":
        if (panel0) {
          setPanel0(false)
        } else {
          setPanel0(true)
        }
        break;
      case "panel1":
        if (panel1) {
          setPanel1(false)
        } else {
          setPanel1(true)
        }
        break;
      case "panel2":
        if (panel2) {
          setPanel2(false)
        } else {
          setPanel2(true)
        }
        break;
      case "panel3":
        if (panel3) {
          setPanel3(false)
        } else {
          setPanel3(true)
        }
        break;   
    }
  };


  return (
    <Grid item container xs={12} className={classes.root} ref={props.getRef}>
        
      <Grid item xs={12}>
        <Typography variant="h3" align="center">Experience</Typography>
      </Grid>

      <Grid item xs={false} sm={2} lg={3} />

      <Grid item container xs={12} sm={8} lg={6} spacing={1}>
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

      <ExpansionPanel
        expanded={panel1}
        onChange={() => handleChange("panel1")}
      >

        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>
            Corporate FP&A
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Visa, Inc.
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.panelDetails1} fontStyle="italic">Senior Financial Analyst (May 2016 - Feb 2018)</ExpansionPanelDetails>

        <ExpansionPanelDetails className={classes.panelDetails2}>
          <ul className={classes.bullets}>
            <li>Lead quarterly preparation of CFO Board of Directors presentation and Earnings package for all Visa revenue (over $20B)</li>
            <li>Acquire deep understanding of strategies, risks, client & government relationships, and world events/trends driving revenue</li>
            <li>Responsible for consolidating, analyzing, understanding, challenging, and adjusting all budgets and forecasts</li>
            <li>Maintains partnerships with and serves as key point of contact for all regional and functional revenue teams</li>
            <li>Coordinates with all regions and functions in creating and maintaining calendar with deadlines of key deliverables</li>
            <li>Submits all budget and forecast revenue adjustments into Oracle Hyperion Essbase</li>
            <li>Submits and error checks all detailed revenue databases in TM1</li>
            <li>Conduct quantitative analysis to identify the key drivers of revenue growth</li>
            <li>Perform the underlying analysis in the models and presentations for corporate targets in advance of budgeting</li>
            <li>Lead quarterly Visa vs. MasterCard analysis, including training of new analysts</li>
            <li>Revamp of process and models for revenue summary, revenue drivers, revenue attribution, foreign exchange, and Visa vs.
MasterCard resulting in increases in efficiency, accuracy, and auditability</li>
            <li>Ad-hoc analyses requested by executives (e.g. Client Incentives as a Percent of Gross Revenue Analysis and CEO Revenue
Overview)</li>
            <li>Develop new management reports and financial metrics </li>
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={panel2}
        onChange={() => handleChange("panel2")}
      >

        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>
            Client Incentive Operations
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Visa, Inc.
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.panelDetails1} fontStyle="italic">Financial Analyst (Oct 2012 - Apr 2016)</ExpansionPanelDetails>

        <ExpansionPanelDetails className={classes.panelDetails2}>
          <ul className={classes.bullets}>
            <li>In charge of Quarterly Contingent Liability Reporting for Asia Pacific, Canada, Latin America Caribbean, and Merchants</li>
            <li>Responsible for calculating and forecasting contingent liabilities from the cost certainty clauses of client incentive contracts</li>
            <li>Coordinated communication with the pricing teams, deal teams, and account executives for each region</li>
            <li>Interpreted and summarized contract language to implement in modeling</li>
            <li>Performed Durbin Amendment Net Compensation testing for Visa’s entire portfolio of US issuers and created year-end forecasts for each issuer</li>
            <li>Provided financial analysis and advice for client incentive deal propositions</li>
            <li>Significantly improved both speed and reliability by developing Excel automation for fee data inputs</li>
            <li>Pulled and organized all data from COGNOS (OpCerts) and MicroStrategy (GMBS, EDW, & MARS)</li>
            <li>Coordinated communication with the North America incentives team</li>
          </ul>
        </ExpansionPanelDetails>

      </ExpansionPanel>

      <ExpansionPanel
        expanded={panel3}
        onChange={() => handleChange("panel3")}
      >

        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>
            Banking Division
          </Typography>
          <Typography className={classes.secondaryHeading}>
            California Department of Financial Institutions
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.panelDetails1} fontStyle="italic">Financial Institutions Examiner (Feb 2009 - Aug 2011)</ExpansionPanelDetails>

        <ExpansionPanelDetails className={classes.panelDetails2}>
          <ul className={classes.bullets}>
            <li>Examiner in Charge</li>
            <li>Managed an entire examination of a problem institution</li>
            <li>Led pre-entry planning and scope creation to prioritize team focus</li>
            <li>Managed a four-person team and provided training, review of documents, and feedback to team members</li>
            <li>Conducted formal exit meeting with executive management of the institution</li>
            <li>Performed detailed safety and soundness analysis on over 20 portfolio financial institutions</li>
            <li>Conducted information-gathering meetings with CEO, CFO, and other executive bank management</li>
            <li>Prepared formal Reports of Examination summarizing findings and strategic recommendations for an audience of bank
executives, boards of directors, audit committees, FDIC, Federal Reserve, and other regulatory officials</li>
            <li>Coordinated cross-functional teams consisting of the FDIC, Federal Reserve, and other regional DFI offices</li>
            <li>Maintained relationships with client financial institutions</li>
          </ul>
        </ExpansionPanelDetails>

      </ExpansionPanel>
      </Grid>

      <Grid item xs={false} sm={2} lg={3} />

    </Grid>
  );
}