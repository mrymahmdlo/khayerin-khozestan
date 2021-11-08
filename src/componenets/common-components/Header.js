import { React, useState } from "react";
import "./header.css";
import Logo from "../../assets/images/khayerin-logo.png";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  Button: {
    display: "flex",
    position: "relative",
    height: "100%",
    width: "auto",
    "& > *": {
      color: "#072366",
      fontSize: "1.1rem",
    },
  },
  button__overlay: {
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0,
    height: "100%",
    width: "100%",
    transition: "opacity 0.5s",
    "&:hover": {},
  },
  list: {
    width: 200,
  },
  list__item: {
    textAlign: "right",
    color: "#000 !important",
    "&>span": {
      fontSize: "1.2rem !important",
    },
  },
});

export default function Header() {
  const classes = useStyles();

  const [right, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to={`/`} className="link" style={{ width: "100%" }}>
          <ListItem key="home">
            <ListItemText className={classes.list__item} primary="خانه" />
          </ListItem>
        </Link>
        <Divider variant="middle" />
        <Link to={`/News`} className="link" style={{ width: "100%" }}>
          <ListItem key="news">
            <ListItemText className={classes.list__item} primary="اخبار" />
          </ListItem>
        </Link>
        <Divider variant="middle" />
        <Link
          to={`/Philanthropists`}
          className="link"
          style={{ width: "100%" }}
        >
          <ListItem key="philanthropists">
            <ListItemText className={classes.list__item} primary="خیرین" />
          </ListItem>
        </Link>
        <Divider variant="middle" />
        <Link to={`/Projects`} className="link" style={{ width: "100%" }}>
          <ListItem key="projects">
            <ListItemText className={classes.list__item} primary="پروژه ها" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  function ChangeHeader() {
    const matches = useMediaQuery("(min-width:600px)");

    if (!matches) {
      return (
        <AppBar className="header">
          <Toolbar
            variant="dense"
            className="app-bar"
            style={{ width: "100%" }}
          >
            <img className="media" src={Logo} alt="khayerin logo" />
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer anchor="right" open={right} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </Toolbar>
        </AppBar>
      );
    }
    return (
      <>
        <div className="header">
          <div className="content">
            <Button
              style={{
                padding: "0.5vw 3vw",
                backgroundColor: "#20C679",
                color: "#fff",
                marginRight: "7.5vw",
              }}
            >
              <b style={{ fontSize: "1.1rem" }}>حمایت از موسسه</b>
            </Button>
            <Link to={`/News`} className={`link ${classes.Button}`}>
              <Button style={{ padding: "0 2vw" }}>
                <div className={classes.button__overlay} />
                اخبار و اطلاعیه ها
              </Button>
            </Link>
            <Link to={`/Philanthropists`} className={`link ${classes.Button}`}>
              <Button style={{ padding: "0 2vw" }}>
                <div className={classes.button__overlay} />
                خیرین
              </Button>
            </Link>
            <Link to={`/About`} className={`link ${classes.Button}`}>
              <Button style={{ padding: "0 2vw" }}>
                <div className={classes.button__overlay} />
                دربارۀ خیرین
              </Button>
            </Link>
            <Link to={`/Projects`} className={`link ${classes.Button}`}>
              <Button style={{ padding: "0 2vw" }}>
                <div className={classes.button__overlay} />
                پروژه ها
              </Button>
            </Link>
            <Link to={`/`} className={`link ${classes.Button}`}>
              <Button style={{ padding: "0 2vw" }}>
                <div className={classes.button__overlay} />
                خانه
              </Button>
            </Link>

            <img className="media" src={Logo} alt="khayerin logo" />
          </div>
        </div>
      </>
    );
  }

  return <>{ChangeHeader()}</>;
}
