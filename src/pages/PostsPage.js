import React, { useState, useEffect } from "react";
import News from "../componenets/postSection/Posts";
import Pagination from "../componenets/common-components/Pagination";
import { Grid } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GetData } from "../services/APIengine";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: "0.5em",
    marginBottom: "1em",
    height: "auto",
  },
  item: {
    height: "auto",
    margin: 0,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 3,
    display: "block",
  },
  post: {
    height: 315,
    background: "#00303F",
    color: "#fff",
    borderRadius: 3,
    textAlign: "right",
    cursor: "pointer",
    transition: "0.25s",
    "&:hover": {
      opacity: "0.9",
    },
  },
}));

export default function NewsPage() {
  const classes = useStyles();

  const [data, setData] = useState(null);
  useEffect(() => {
    GetData(`Tehran/PostGroup`).then((res) => setData(res));
  }, []);

  const [news, setNews] = useState(null);
  useEffect(() => {
    GetData(`Tehran/Home`).then((res) => setNews(res));
  }, []);

  /* pagination **********/
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastPage = itemsPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const allItems = data?.posts.length;
  const currentItems = data?.posts.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {data ? (
        <div>
          {news ? <News newsData={news.postSection.posts} /> : null}
          {data ? (
            <Grid container className={classes.root} spacing={2}>
              {currentItems.map((item) => (
                <Grid item xs={12} md={3} sm={6} className={classes.item}>
                  <div className={classes.post}>
                    <Link to={`/News/${item.id}`}>
                      <img
                        src={
                          "http://charity.mykanoon.ir/File/Get/" +
                          item.imageIds[0]
                        }
                        className={classes.image}
                      ></img>
                      <div
                        className="content__item"
                        style={{
                          margin: "auto 5px",
                          color: "#fff",
                          height: 65,
                        }}
                      >
                        {item.title}
                      </div>
                      <Button
                        variant="contained"
                        style={{
                          width: "100%",
                          marginTop: 9,
                          borderRadius: 0,
                          background: "#1b5263",
                          color: "#fff",
                          padding: 10,
                        }}
                        className={classes.button}
                      >
                        اطلاعات بیشتر
                      </Button>
                    </Link>
                  </div>
                </Grid>
              ))}
            </Grid>
          ) : null}
          <Pagination
            itemsPerPage={itemsPerPage}
            allItems={allItems}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <CircularProgress style={{ marginTop: "10vh" }} />
      )}
    </>
  );
}
