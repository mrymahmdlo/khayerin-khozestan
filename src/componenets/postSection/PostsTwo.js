import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  outer: {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "21vw",
    marginBottom: 30,
    backgroundColor: "#fff" ,
    "@media (max-width: 700px)": {
      height: "50vw",
    },
  },
  media: {
    width: "100%",
    height: "100%",
    transition: "all ease-out 0.5s 0s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  date: {
    padding: "10px 35px",
    display: "inline-block",
    color: "#fff",
    backgroundColor: "#09cc7f",
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: "1.3rem",
  },
  title: {
    color: "#191d34",
    cursor: "pointer",
    marginBlock: 20,
    transition: "all 0.3s ease",
    fontWeight: "bold",
    "&:hover": {
      color: "#09CC7F",
    },
  },
});

export default function TwoPosts({ postsData }) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h5" className="greenTitle">
        موسسه خیرین مدرسه ساز خوزستان
      </Typography>
      <Typography component="p" className="blueText">
        اخرین اخبار و اطلاعیه ها
      </Typography>
      <Grid
        container
        spacing={4}
        style={{ textAlign: "right", marginBottom: 100}}
      >
        <Grid item xs={12} sm={6}>
          <div className={classes.outer}>
            <img
              src={
                "http://charity.mykanoon.ir/File/Get/" +
                postsData[2].imageIds[0]
              }
              className={classes.media}
            />
            <div className={classes.date}>{postsData[2].createDate}</div>
          </div>
          <Typography
            variant="body1"
            component="p"
            style={{ color: "#707b8e" }}
          >
            موسسه خیرین مدرسه ساز خوستان
          </Typography>
          <Link to={`/News/${postsData[2].id}`} >
          <Typography variant="h5" component="h5" className={classes.title}>
            {postsData[2].title}
          </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.outer}>
            <img
              src={
                "http://charity.mykanoon.ir/File/Get/" +
                postsData[5].imageIds[0]
              }
              className={classes.media}
            />
            <div className={classes.date}>{postsData[1].createDate}</div>
          </div>
          <Typography
            variant="body1"
            component="p"
            style={{ color: "#707b8e" }}
          >
            موسسه خیرین مدرسه ساز خوزستان
          </Typography>
          <Link to={`/News/${postsData[5].id}`} >
          <Typography variant="h5" component="h5" className={classes.title}>
            {postsData[5].title}
          </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
