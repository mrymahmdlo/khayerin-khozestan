import { React, useState } from "react";
import "./header.css";
import Logo from "../../assets/images/khayerin-logo.png";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ApartmentIcon from '@material-ui/icons/Apartment';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';

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
    buttonOnHover: {
      "&:hover": {
        color: "#20C679 !important",
      },
    },
    button__overlay: {
      position: "absolute",
      backgroundColor: "#000",
      opacity: 0,
      height: "100%",
      width: "100%",
      transition: "opacity 0.5s",
    },
    list: {
      width: '100%',
      padding: '0 1em',
    },
    list__item: {
      textAlign: "right",
      color: "#000 !important",
      "&>span": {
        fontSize: "1.2rem",
      },
    },
  });

const menuItems={
  items: [
    {
      path: '/',
      content: 'خانه',
    },
    {
      path: '/Philanthropists',
      content: 'خیرین',
    },
    {
      path: '/News',
      content: 'اخبار و اطلاعیه ها',
    }

  ]
}
const subMenuTitle={
  titles: [
    {
      content: 'پروژه ها',
    },
    {
      content: 'دربارۀ خیرین',
    }
  ]
}
const subMenuItems={
  items: [
    {
      path: '/Projects/half-built',
      content: 'پروژه های نیمه تمام -',
    },
    {
      path: '/Projects/overhauled',
      content: 'پروژه های بازسازی تخریبی -',
    },
    {
      path: '/Projects/completed',
      content: 'پروژه های ساخته شده -',
    },
    {
      path: '/Projects/under-construction',
      content: 'پروژه های در حال انجام -',
    },
    {
      path: 'About',
      content: 'تاریخچۀ موسسه -',
    },
    {
      path: '/Appreciations',
      content: 'تقدیرنامه ها -',
    }
  ]
}

export default function AppBarMenu(){
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

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const MenuItems=menuItems?.items?.map((item, index)=>(
      <Link to={item.path} className="link" style={{ width: "100%" }}>
        <ListItem style={{direction:' rtl', color: '#000'}}>
          {index===0 ? <HomeRoundedIcon/> : (index===1 ? <PersonRoundedIcon/> : <ListAltRoundedIcon/>)}
          <ListItemText onClick={toggleDrawer(false)} className={classes.list__item} primary={item.content} />
        </ListItem>
      </Link>
  ))
  const SubMenuTitles=subMenuTitle?.titles?.map((item, index)=>(
      <div className="link" style={{ width: "100%", direction: 'rtl' }}>
        <ListItem button onClick={index===0 ? handleClick1 : handleClick2} className={classes.list__item}>
          {index===0 ? <ApartmentIcon/> : <InfoRoundedIcon/>}
          <ListItemText className={classes.list__item} primary={item.content}/>
          {(index===0 ? open1 : open2) ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </div>
  ))
  const SubMenuItems=subMenuItems?.items?.map((item, index)=>(
      <Collapse in={index<4 ? open1 : open2} timeout="auto">
        <List component="div" disablePadding>
          <ListItem button sx={{ pl: 4 }}>
            <Link to={item.path} className="link" style={{ width: "100%",paddingRight: "1em" }}>
              <ListItemText onClick={toggleDrawer(false)} className={classes.list__item} primary={item.content} />
            </Link>
          </ListItem>
        </List>
      </Collapse>
  ))

    const list = () => (

        <div
          className={classes.list}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {MenuItems[0]}
            <Divider variant="middle" />
            {SubMenuTitles[0]}
            {SubMenuItems.slice(0,4)}
            <Divider variant="middle" />
            {SubMenuTitles[1]}
            {SubMenuItems.slice(4,6)}
            <Divider variant="middle" />
            {MenuItems[1]}
            <Divider variant="middle" />
            {MenuItems[2]}
          </List>
        </div>
      );

    return(
        <AppBar className="header">
          <Toolbar
            variant="dense"
            className="app-bar"
            style={{ width: "100%" }}
          >
            <Link to={`/`} >
              <img className="media" src={Logo} alt="khayerin logo" />
            </Link>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              style={{color: "#010A1F"}}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer variant='temporary' anchor="right" open={right} onClose={toggleDrawer(false)} >
              {list()}
            </Drawer>
          </Toolbar>
        </AppBar>
    )
}