import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { GetData } from "../../services/APIengine";
import { Grid, Typography } from "@material-ui/core";
import { DateRange } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";

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
    paddingTop:'15px',
    paddingBottom:'40px'
  },
  title: {
    borderRight: "5px solid #09cc7f",
    paddingRight: 10,
    color: "#09cc7f",
    "@media (max-width: 600px)": {
      fontSize: "1.4em",
      borderRight: "3px solid #09cc7f",
      color: "#09cc7f",
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
    <Grid sm={9} className={classes.root}>
      <Grid className={classes.newData}>
        <Typography  component="h1" variant="" className={classes.title} >
          {data?.post?.title}
        </Typography>
        <Typography component="h3" variant="" className={classes.summary}>
          {data?.post?.summary}
        </Typography>
        <Typography component="p" variant="" style={{ marginRight: 5, fontSize: 18 }}>
          {data?.post?.createDate}
          <DateRange style={{ marginLeft: 5, verticalAlign: "sub", fontSize: 30 }} />
        </Typography>
      </Grid>
      <div style={{ backgroundColor: "#fff" }}>
        <Grid>
          <img src={"http://charity.mykanoon.ir/File/Get/" + data?.post?.imageIds} className={classes.image}></img>
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
            style={{ fontSize: "14px", lineHeight: "30px", textAlign: "justify", fontWeight: "400", marginTop: "20px" }}
            dangerouslySetInnerHTML={{ __html: data?.post?.content }}
            // className="ck-content"
          ></div>

        </Grid>
      </div>

      {/* {data?.newPosts ? (
        <>
          <div
            style={{
              textAlign: "right",
              fontSize: 22,
              color: "#00303F",
              fontWeight: "bold",
              paddingRight: 10,
            }}
          >
            خبر های اخیر
          </div>
          <Grid container spacing={3} style={{ marginTop: 0 }}>
            {data?.newPosts.slice(0, 3).map((item) => (
              <Grid item xs={12} md={4} sm={6}>
                <div className={classes.post}>
                  <Link to={`/News/${item.id}`}>
                    <img src={"http://charity.mykanoon.ir/File/Get/" + item.imageIds} className={classes.image2}></img>
                    <div className="content__item" style={{ margin: "auto 5px", color: "#fff", height: 65 }}>
                      {item.title}
                    </div>
                    <Button variant="contained" style={{ width: "100%", marginTop: 9, borderRadius: 0 }}>
                      اطلاعات بیشتر
                    </Button>
                  </Link>
                </div>
              </Grid>
            ))}
          </Grid>
        </>
      ) : null} */}
    </Grid>
  );
};

export default EachNews;
