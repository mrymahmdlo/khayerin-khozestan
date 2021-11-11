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
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function NavBar(){

    const StyledMenu = withStyles({
        paper: {
          borderTop: "5px solid #20C679",
          borderRadius: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          margin: 0,
          padding: 0,
        },
      })((props) => (
        <Menu
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          {...props}
        />
      ));
  
      const [anchorEl, setAnchorEl] = useState(null);
      const [anchorEl1, setAnchorEl1] = useState(null);
  
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
  
      const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
      };
  
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleClose1 = () => {
        setAnchorEl1(null);
      };

    return(
        <>
        <div className="header">
          <div className="content">
              <button className="btn1">
                <span>حمایت از موسسه</span>
              </button>
            <Link to={`/News`} className={`link ${classes.Button}`}>
              <Button
                style={{ padding: "0 2vw" }}
                className={classes.buttonOnHover}
              >
                <div className={classes.button__overlay} />
                اخبار و اطلاعیه ها
              </Button>
            </Link>
            <Link to={`/Philanthropists`} className={`link ${classes.Button}`}>
              <Button
                style={{ padding: "0 2vw" }}
                className={classes.buttonOnHover}
              >
                <div className={classes.button__overlay} />
                خیرین
              </Button>
            </Link>
            <div className={`link ${classes.Button}`}>
              <Button
                style={{ padding: "0 2vw" }}
                className={classes.buttonOnHover}
              >
                <div
                  className={classes.button__overlay}
                  onClick={handleClick1}
                  aria-controls="customized-menu1"
                  aria-haspopup="true"
                />
                دربارۀ خیرین
              </Button>
            </div>
            <StyledMenu
              id="customized-menu1"
              anchorEl={anchorEl1}
              open={Boolean(anchorEl1)}
              onClose={handleClose1}
            >
              <StyledMenuItem>
                <Link to="/About">
                <ListItemText
                  primary="تاریخچه موسسه"
                  style={{ textAlign: "right", color: "#fff" }}
                />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link to="/Appreciations" >
                <ListItemText
                  primary="تقدیرنامه ها"
                  style={{ textAlign: "right", color: "#fff" }}
                />
                </Link>
              </StyledMenuItem>
            </StyledMenu>
            <Link to={`/Projects`} className={`link ${classes.Button}`}>
              <Button
                style={{ padding: "0 2vw" }}
                className={classes.buttonOnHover}
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <div className={classes.button__overlay} />
                پروژه ها
              </Button>
            </Link>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemText
                  primary="پروژه های نیمه تمام"
                  style={{ textAlign: "right", color: "#fff" }}
                />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemText
                  primary="پروژه های بازسازی تخریبی"
                  style={{ textAlign: "right", color: "#fff" }}
                />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemText
                  primary="پروژه های ساخته شده"
                  style={{ textAlign: "right", color: "#fff" }}
                />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemText
                  primary="پروژه های درحال انجام"
                  style={{ textAlign: "right", color: "#fff" }}
                />
              </StyledMenuItem>
            </StyledMenu>
            <Link to={`/`} className={`link ${classes.Button}`}>
              <Button
                style={{ padding: "0 2vw" }}
                className={classes.buttonOnHover}
              >
                <div className={classes.button__overlay} />
                خانه
              </Button>
            </Link>
            <img className="media" src={Logo} alt="khayerin logo" />
          </div>
        </div>
      </>
    )
}