import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { GetData } from "../../services/APIengine";
import { Grid, Typography } from "@material-ui/core";
import Searchbar from "../common-components/Searchbar";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
const useStyles = makeStyles(() => ({
  root: {
    height: "auto",
    margin: "3em auto",
  },
  newData: {
    padding: 10,
    color: "#00303F",
    textAlign: "right",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  content: {
    margin: "0px auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "100%",
    textAlign: "right",
    boxShadow: "0 10px 20px 0 rgb(221 221 221 / 30%)",
    padding: "0px 30px",
    direction: "rtl",
    paddingTop: "15px",
    paddingBottom: "40px",
  },
  title: {
    textAlign: "center",
    color: "#00303F",
    fontWeight: "800",
    fontSize: "2.8em",
    "&:hover": {
      color: "#09cc7f !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.5em",
      textAlign: "center",
      color: "#00303F",
    },
  },

  summary: {
    textAlign: "justify",
    direction: "rtl",
    "@media (max-width: 600px)": {
      fontSize: "1em",
      marginRight: 7,
      marginBottom: 10,
    },
  },
  image2: {
    height: 200,
    width: "100%",
    borderRadius: 3,
    display: "block",
  },
  post: {
    height: 310,
    background: "#00303F",
    color: "#fff",
    borderRadius: 3,
    textAlign: "right",
    cursor: "pointer",
    "&:hover": {
      opacity: "1",
    },
  },
  newpost: {
    margin: "0 auto",
  },
  news: {},
}));

const EachNews = () => {
  const { id } = useParams();
  const classes = useStyles();

  const [data, setData] = useState(null);
  useEffect(() => {
    GetData(`Tehran/Post?id=` + id).then((res) => setData(res));
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Grid
      container
      justifyContent="space-evenly"
      direction="row-reverse"
      className={classes.root}
    >
      <Grid className={classes.newData}>
        <Typography component="h1" variant="" className={classes.title}>
          {data?.post?.title}
        </Typography>
      </Grid>

      <Searchbar />

      <Grid xs={12} md={7} className={classes.root}>
        <div style={{ backgroundColor: "#fff" }}>
          <Grid>
            <img
              src={
                "http://charity.mykanoon.ir/File/Get/" + data?.post?.imageIds
              }
              className={classes.image}
            ></img>
          </Grid>
          <Grid>
            <div
              style={{
                paddingRight: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              className="text"
            >
              {data?.post?.createDate}
              <CalendarTodayIcon
                style={{ color: "#000", marginLeft: "5px" }}
                fontSize="small"
              />
            </div>
          </Grid>
          <Grid className={classes.content}>
            <Typography
              style={{
                fontWeight: "600",
                fontSize: "24px",
              }}
            >
              {data?.post?.title}
            </Typography>
            <div
              style={{
                fontSize: "14px",
                lineHeight: "30px",
                textAlign: "justify",
                fontWeight: "400",
                marginTop: "20px",
              }}
              dangerouslySetInnerHTML={{ __html: data?.post?.content }}
              className="ck-content"
            ></div>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default EachNews;
