import React, { useState, useEffect } from "react";
import News from "../componenets/postSection/Posts";
import Pagination from "../componenets/common-components/Pagination";
import { Grid } from "@material-ui/core";
import { CircularProgress,Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GetData } from "../services/APIengine";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  withStyles,
  createStyles,
  InputBase,
  Hidden,
  createTheme,
  StylesProvider,
  ThemeProvider,
  jssPreset,
} from "@material-ui/core";
const theme = createTheme({
  direction: "rtl",
});
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const StyledInput = withStyles((theme) =>
  createStyles({
    root: {},
    input: {
      borderRadius: 0,
      position: "relative",
      backgroundColor: "#fff",
      border: "1px solid #fff",
      fontSize: 12,
      padding: "12px 17px",
      "&:focus": {
        backgroundColor: "#fff",
        border: `1px solid #fff !important`,
      },
      //   paddingBottom: 12,
    },
  })
)(InputBase);

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: "70px",
    marginBottom: "1em",
    height: "auto",
  },
  item: {
    height: "auto",
    // padding:'10px 20px'
    margin:'0px 10px'
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
  news:{
    display:'flex' ,
    flexDirection:'column',
    backgroundColor:'#fff',
   
    "& .description":{
      display:'flex' ,
      flexDirection:'column',
      padding:'20px 15px',
      margin:'10px 0px',
      textAlign:'right',
      boxShadow:'0 10px 20px 0 rgb(221 221 221 / 30%)',
      "& .title":{
        fontSize:'17px',
        fontWeight:'600',
        margin:'5px 0px',
        cursor:'pointer',
        "&:hover":{
          color:'#09cc7f'
        }
      },
      "& .text":{
        fontSize:'14px',
        margin:'5px 0px',
      },
    }
  }
  
}));

const NewsComponent = ({imgSrc, title , id})=>{
  const classes = useStyles();

  return (
    <div  className={classes.news} >
      <div>
          <img src={imgSrc} alt='news' width={'100%'} height={'auto'} />
      </div>
      <div className='description' >
          <Link to={`/News/${id}`}>
                   <Typography className='title' >
                         {title}
                  </Typography>
          </Link>
         
      </div>
    </div>
  )
}

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
          {/* {news ? <News newsData={news.postSection.posts} /> : null} */}
          {data ? (
            <Grid container justifyContent="space-between" className={classes.root} >
              {currentItems.map((item) => (
                <Grid item xs={12} lg={7}   className={classes.item}>

                  <NewsComponent 
                  imgSrc={
                    "http://charity.mykanoon.ir/File/Get/" +
                          item.imageIds[0]
                  }
                  title={item.title}
                  description={'text'}
                  id={item.id}
                  key={item.id}
                  />
                  {/* <div className={classes.post}>
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
                  </div> */}
                </Grid>
              ))}
              <Hidden mdDown>
              <Grid lg={4} item container direction="column">
                <div
                  style={{
                    padding: "30px",
                    backgroundColor: "#f6f6f6",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      direction: "rtl",
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "#09cc7f",
                      }}
                      disabled
                    >
                      <SearchIcon style={{ color: "#fff" }} />
                    </Button>
                    <ThemeProvider theme={theme}>
                      <StylesProvider jss={jss}>
                        <StyledInput
                          placeholder="جست و جو"
                          style={{
                            width: "100%",
                          }}
                        />
                      </StylesProvider>
                    </ThemeProvider>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginTop: "15px",
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "#09cc7f",
                        width: "100%",
                        color: "#fff",
                        padding: "10px",
                      }}
                    >
                      جست و جو
                    </Button>
                  </div>
                </div>
                </Grid>
            </Hidden>
            </Grid>
          ) : null}
         
        </div>
      ) : (
        <CircularProgress style={{ marginTop: "10vh" }} />
      )}
    </>
  );
}
