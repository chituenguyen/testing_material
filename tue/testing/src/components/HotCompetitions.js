import React from "react";
import {
  Typography,
  makeStyles,
} from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Rectangle from "./Rectangle";
import {Divider} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  text13: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "13px",
    lineHeight: "19px",
    letterSpacing: "0.01em",
  },
  text12: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing: "0.01em",
  },
  MuiSvgIconRoot:{
    width:'12px'
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const HotCompetitons = () => {
  const classes = useStyles();
  return (
    <Card style={{paddingBottom:'20px',marginTop:'18px'}}>
      <CardActions style={{padding:'20px 23px'}}>
      <Typography type="body1" className={classes.text13} style={{ color: '#334D6E' }}>Hot Competitons</Typography>
      <Typography type="body2" className={classes.text12} style={{ color: '#6A707E',marginLeft:'auto' }}>Show: This month</Typography>     
      
      </CardActions>
      <Divider variant="middle" style={{border:'0.5px solid #EBEFF2',margin:'0px 24px',opacity:0.7}}/>
      <Rectangle></Rectangle>
      <Rectangle></Rectangle>
      <Rectangle></Rectangle>
      <Rectangle></Rectangle>
      <Rectangle></Rectangle>
    </Card>
  );
};

export default HotCompetitons;
