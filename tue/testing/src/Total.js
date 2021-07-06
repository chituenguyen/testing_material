import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import React from "react";
import SearchBar from "./components/SearchBar";
import ProfilePage from "./pages/profile";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PeopleIcon from "@material-ui/icons/People";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import SettingsIcon from "@material-ui/icons/Settings";
const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#e6e0e0",
  },
  title: {
    position: "absolute",
    color: "#885AF8",
    left: "24px",
    width: "69px",
    height: "26px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "25px",
    fontWeight: "600",
  },
  appBar: {
    backgroundColor: "#fff",
    color: "black",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 16,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxShadow: "0.5px 0.5px 2px rgba(0,0,0,0.5)",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: drawerWidth,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  text14: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "21px",
  },
  text13: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "19.5px",
  },
  MuiListIconRoot: {
    color: "#C2CFE0",
  },
  nested: {
    paddingLeft: theme.spacing(9),
  },
  MuiSvgIconRoot: {
    width: "8px",
  },
  MuiListItemIconRoot: {
    minWidth: "24px",
  },
}));

export default function Total() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>  
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbarTop}>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          {theme.direction === "rtl" ? (
            ""
          ) : (
            <>
              <p className={classes.title}>Virsity</p>
            </>
          )}
        </div>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <img src="https://www.figma.com/file/BJZMsWtzUkiLBVICmGCw02/Virsity-Webapp?node-id=5%3A804"></img>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  className={classes.text14}
                  type="body2"
                  style={{ color: "#192A3E" }}
                >
                  Sierra Ferguson
                </Typography>
              }
              secondary="s.ferguson@gmail.com"
            />
          </ListItem>
        </List>

        <List></List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon
                classes={{ root: classes.MuiListIconRoot }}
              ></DashboardIcon>
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.text13}
                  style={{ color: "#334D6E" }}
                >
                  Competitions
                </Typography>
              }
            />
          </ListItem>
        </List>

        <List>
          <ListItem button>
            <ListItemIcon>
              <ListIcon classes={{ root: classes.MuiListIconRoot }}></ListIcon>
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.text13}
                  style={{ color: "#5D5FEF" }}
                >
                  Projects
                </Typography>
              }
            />
          </ListItem>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon style={{ minWidth: "24px", color: "#FFB946" }}>
                <RadioButtonUncheckedIcon
                  classes={{ root: classes.MuiSvgIconRoot }}
                ></RadioButtonUncheckedIcon>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    className={classes.text13}
                    style={{ color: "#334D6E" }}
                  >
                    Active
                  </Typography>
                }
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon style={{ minWidth: "24px", color: "#2ED47A" }}>
                <RadioButtonUncheckedIcon
                  classes={{ root: classes.MuiSvgIconRoot }}
                ></RadioButtonUncheckedIcon>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    className={classes.text13}
                    style={{ color: "#334D6E" }}
                  >
                    Completed
                  </Typography>
                }
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon style={{ minWidth: "24px", color: "#F7685B" }}>
                <RadioButtonUncheckedIcon
                  classes={{ root: classes.MuiSvgIconRoot }}
                ></RadioButtonUncheckedIcon>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    className={classes.text13}
                    style={{ color: "#334D6E" }}
                  >
                    Ended
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon
                classes={{ root: classes.MuiListIconRoot }}
              ></PeopleIcon>
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.text13}
                  style={{ color: "#334D6E" }}
                >
                  Teams
                </Typography>
              }
            />
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <ChatBubbleOutlineIcon
                classes={{ root: classes.MuiListIconRoot }}
              ></ChatBubbleOutlineIcon>
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.text13}
                  style={{ color: "#334D6E" }}
                >
                  Chats
                </Typography>
              }
            />
          </ListItem>
        </List>
        <List style={{ marginTop: "150px" }}>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon
                classes={{ root: classes.MuiListIconRoot }}
              ></SettingsIcon>
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.text13}
                  style={{ color: "#334D6E" }}
                >
                  Settings
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ProfilePage />
      </main>
    </div>
  );
}
