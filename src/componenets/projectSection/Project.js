import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import ToFarsiNumber from "../common-components/Converter";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 0,
    marginLeft: 8,
    marginRight: 8,
    maxHeight: 376,
    minHeight: 376,
    "& > *": {
      padding: "0",
      marginLeft: 0,
      marginRight: 0,
    },
  },
  content: {
    marginTop: "0.8em",
  },
  media: {
    marginTop: 0,
    height: 174,
    maxHeight: "30%",
    minHeight: "30%",
  },
  button: {
    width: "100%",
    borderRadius: 0,
    paddingTop: "1em",
    paddingBottom: "1em",
    textDecoration: "none",
  },
});

export default function Project({ id, path, theme, project }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <Link to={`/${path}/${id}`} style={{ width: "100%" }}>
          <img
            className={classes.media}
            alt={project.title}
            src={"http://charity.mykanoon.ir/File/Get/" + project.imageIds[0]}
          ></img>
          <Typography component="h6" variant="h6">{project.title}</Typography>
        </Link>
      </Card>
    </ThemeProvider>
  );
}
