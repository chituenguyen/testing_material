import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ProfileCard from "../components/ProfileCard";
import Leaderboard from "../components/Leaderboard";
import HotCompetitons from "../components/HotCompetitions";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "95%",
  },
}));

const ProfilePage = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={7}>
        <ProfileCard />
      </Grid>
      <Grid item xs={5}>
        <Leaderboard></Leaderboard>
        <HotCompetitons></HotCompetitons>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
