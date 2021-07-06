import React from "react";
import {
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Competitions from './Competitons'


const useStyles = makeStyles((theme) => ({
  text13: {
    fontFamily:'Poppins',
    fontStyle:'normal',
    fontWeight:800,
    fontSize:'13px',
    lineHeight:'19px',
    letterSpacing:'0.01em'
  },
  text12: {
    fontFamily:'Poppins',
    fontStyle:'normal',
    fontWeight:500,
    fontSize:'12px',
    lineHeight:'18px',
    letterSpacing:'0.01em'
  }
}));


const ProfileCard = () => {
  const classes = useStyles();
  return (
    <Card style={{paddingBottom:'20px'}}>
      <CardActions style={{padding:'20px 23px'}}>
      <Typography type="body1" className={classes.text13} style={{ color: '#334D6E' }}>Standings Competitions</Typography>
      <Typography type="body2" className={classes.text12} style={{ color: '#6A707E',marginLeft:'auto' }}>Show: This week</Typography>     
      
      </CardActions>
      <Divider variant="middle" style={{border:'1px solid #2ed47a', borderRadius:'3px',margin:'0px 24px'}}/>
      <Typography type='subtitle1' className={classes.text13} style={{margin:'20px 24px', fontSize:'15px'}}>23 December, Sunday </Typography>
      <Competitions ></Competitions>
      <Competitions></Competitions>
      <Competitions></Competitions>
    </Card>

  );
};

export default ProfileCard;
