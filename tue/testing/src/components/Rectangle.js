import React from "react";
import {
  makeStyles,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import StarIcon from '@material-ui/icons/Star';
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

const Rectangle = () => {
  const classes = useStyles();
  return (
    <Card  style={{ margin: "14px 16px", boxShadow:'0px 6px 18px rgba(0, 0, 0, 0.06)', borderRadius:'3,5px'}}>
    <CardActions style={{height:'48px'}}>
      <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <img src='https://www.figma.com/file/BJZMsWtzUkiLBVICmGCw02/Virsity-Webapp?node-id=5%3A804'></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Anonymous Panda " style={{color:'#707683'}} className={classes.text13}/>
      </ListItem>

      </List>
      <StarIcon style={{marginLeft:'auto', color:'purple', marginRight:'30px'}}></StarIcon>
      </CardActions>
  </Card>
  );
};

export default Rectangle;
