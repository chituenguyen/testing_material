import React from "react";
import {
  Typography,
  makeStyles,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
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

const Competitions = () => {
  const classes = useStyles();
  return (
    <Card style={{ margin: "0px 24px" ,marginBottom:'25px'}}>
      <CardActions style={{ padding: "17px 23px" }}>
        <Typography
          type="body1"
          className={classes.text13}
          style={{ color: "#323C47", fontSize: "15px" }}
        >
          Competitions
        </Typography>
        <Button
          variant="contaioutned"
          style={{
            marginLeft: "auto",
            backgroundColor: "#2ED47A",
            color: "#fff",
            fontSize: "11px",
            padding: "3px 8px",
          }}
        >
          Open
        </Button>
      </CardActions>

      <CardActions style={{ padding: "0px 23px" }}>
        <Typography
          type="body2"
          className={classes.text13}
          style={{ color: "#323C47",fontWeight:400,opacity:0.7}}
        >
          Registration deadline: <span className={classes.text13}>December 23, 2018</span>
        </Typography>
        <div style={{marginLeft:'auto'}}>
            <RadioButtonUncheckedIcon classes={{root:classes.MuiSvgIconRoot}} style={{marginRight:'8px',color:'#FFB946'}}></RadioButtonUncheckedIcon>
            <RadioButtonUncheckedIcon classes={{root:classes.MuiSvgIconRoot}} style={{marginRight:'8px',color:'#2ED47A'}}></RadioButtonUncheckedIcon>
            <CreateIcon classes={{root:classes.MuiSvgIconRoot}} style={{marginRight:'8px'}}></CreateIcon>
            <DeleteIcon classes={{root:classes.MuiSvgIconRoot}}></DeleteIcon>
        </div>
      </CardActions>
      <CardActions>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <img src='https://www.figma.com/file/BJZMsWtzUkiLBVICmGCw02/Virsity-Webapp?node-id=5%3A804'></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="George Fields " style={{color:'#707683'}} className={classes.text13}/>
      </ListItem>
      </List>
      </CardActions>

      <div style={{marginLeft:'24px'}}>
          <p>Description</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </div>
    </Card>
  );
};

export default Competitions;
