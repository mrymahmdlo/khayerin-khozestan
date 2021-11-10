import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  withStyles,
  createStyles,
  InputBase,
  Button,
  ThemeProvider,
  createTheme,
  jssPreset,
  StylesProvider,
  Hidden,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { create } from "jss";
import rtl from "jss-rtl";
import ToFarsiNumber from "../componenets/common-components/Converter";
import NumberCreator from "../componenets/common-components/NumberCreator";
import PersonIcon from "@material-ui/icons/Person";

const base = "http://charity.mykanoon.ir/api";

const useStyles = makeStyles(() => ({
  content: {
    padding: "0px 40px",
    "@media (max-width: 800px)": {
      padding: "2em 0em 5em",
    },
  },
  project: {
    backgroundColor: "#16697a",
    color: "#fff",
    margin: "0.7em",
    borderRadius: "6px",
  },
  projectPic: {
    backgroundColor: "#fff",
    margin: "0.8em auto",
    height: 175,
    maxHeight: "40%",
    minHeight: "40%",
    maxWidth: "90%",
    borderRadius: "6px",
  },
  info: {
    backgroundColor: "#16697a",
    color: "#fff",
    margin: "0.8em auto",
    textAlign: "center",
  },
  title: {
    backgroundColor: "#fff",
    color: "#212121",
    width: "90%",
    margin: "0 auto 0.5em",
    borderRadius: "4px",
    "@media (max-width: 800px)": {
      fontSize: 18,
      width: "95%",
    },
  },
  button: {
    backgroundColor: "#00303F",
    color: "#fff",
    width: "100%",
    borderRadius: "0 0 6px 6px",
    paddingTop: "1em",
    paddingBottom: "1em",
    "&:hover": {
      backgroundColor: "#00171a",
    },
  },
  projectItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    marginBottom: "20px",
    width: "100%",
    "& .description": {
      display: "flex",
      flexDirection: "column",
      padding: "0px 15px",
      paddingBottom: "23px",
      marginBottom: "15px",
      textAlign: "right",
      boxShadow: "0 10px 20px 0 rgb(221 221 221 / 30%)",
      "& .title": {
        fontSize: "17px",
        fontWeight: "700",
        margin: "10px 0px",
        cursor: "pointer",
        "&:hover": {
          color: "#09cc7f",
        },
      },
      "& .text": {
        fontSize: "14px",
        // margin: "10px 0px",
        color: "#999",
      },
    },
  },
  category: {
    padding: "30px 40px",
    backgroundColor: "#f6f6f6",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    marginTop: "15px",
    "& .divider": {
      borderBottom: "1px solid #ece6e6",
      width: "100%",
      margin: "15px 0px",
    },
    "& .title": {
      fontSize: "20px",
      fontWeight: "500",
      color: "#2d2d2d",
      textAlign: "right",
      width: "100%",
      letterSpacing: "-1.2px",
    },
    "& .item": {
      fontSize: "16px",
      color: "#10285d",
      letterSpacing: "-1.2px",
      textAlign: "right",
      width: "100%",
      fontWeight: "300",
      "&:hover": {
        color: "#09cc7f",
        cursor: "pointer",
      },
    },
  },
}));

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

const ProjectComponent = ({ imgSrc, title, philanthropist, cityName, fund, id, typeId }) => {
  const classes = useStyles();

  return (
    <div className={classes.projectItem}>
      <div
        style={{
          backgroundColor: "#f6f6f6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imgSrc}
          alt="projectPic"
          style={{
            height: 260,
            maxHeight: "60%",
            minHeight: "60%",
            maxWidth: "100%",
          }}
        />
      </div>
      <div className="description">
        <Link
          to={
            typeId === 1
              ? `/half-built/${id}`
              : typeId === 2
              ? `/overhauled/${id}`
              : typeId === 3
              ? `/completed/${id}`
              : `/under-construction/${id}`
          }
        >
          <Typography className="title">{title}</Typography>
        </Link>

        <Typography className="text">{/* {description} */}</Typography>

        <div className="text">{cityName}</div>

        <div className="text">
          <span>بودجه : </span>
          {ToFarsiNumber(NumberCreator(fund))}
          <span> تومان</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }} className="text">
          {`${philanthropist.firstName} ${philanthropist.lastName ? philanthropist.lastName : ""}`}
          <PersonIcon style={{ color: "#000" }} fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default function AllProjects() {
  const classes = useStyles();
  const [currentTypId, setCurrentTypeId] = useState(0);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(base + "/Tehran/ProjectGroup").then((response) => response.json().then((response) => {
      if(!currentTypId) setData(response.projects)
      else {
        setData(
          response.projects.filter((item)=>{
            return item.typeId === currentTypId
          })
        )

      }

    }));
  }, [currentTypId]);

  const theme = createTheme({
    direction: "rtl",
  });

  return (
    <>
      {data ? (
        <div style={{ marginTop: "90px" }}>
          <Grid className={classes.content} container justifyContent="space-between">
            <Grid item container xs={12} lg={7}>
              {data.map((item) => (
                <Grid key={item.id} xs={12} item>
                  <ProjectComponent
                    imgSrc={`http://charity.mykanoon.ir/File/Get/${item.imageIds[0]}`}
                    title={item.title}
                    philanthropist={item.philanthropist}
                    id={item.id}
                    typeId={item.typeId}
                    fund={item.fund}
                    cityName={item.cityName}
                    
                  />
                  {/* <div className={classes.project}>
                                <img src={`http://charity.mykanoon.ir/File/Get/${item.imageIds[0]}`} alt="projectPic" className={classes.projectPic}/>
                                <div className={classes.info}>
                                    <h3 className={classes.title}>{item.title}</h3>
                                    <div>اهدا شده توسط : {`${item.philanthropist.firstName} ${item.philanthropist.lastName ? item.philanthropist.lastName : ''}`}</div>
                                    <div><span>بودجه : </span>{ToFarsiNumber(NumberCreator(item.fund))}<span> تومان</span></div>
                                    <div>{item.cityName}</div>
                                </div>
                                <div style={{padding: '0 !important'}}>
                                    <Link
                                        to={item.typeId===1 ? `/half-built/${item.id}` :
                                            (item.typeId===2 ? `/overhauled/${item.id}` :
                                                (item.typeId===3 ? `/completed/${item.id}` :
                                                    `/under-construction/${item.id}`))}>
                                        <Button variant='contained' className={classes.button}>
                                            اطلاعات بیشتر
                                        </Button>
                                    </Link>
                                </div>
                            </div> */}
                </Grid>
              ))}
            </Grid>

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

                <div className={classes.category}>
                  <Typography className="title">دسته بندی پروژه ها</Typography>
                  <div className="divider"></div>

                  <Typography className="item" onClick={() => setCurrentTypeId(4)}>
                    درحال ساخت
                  </Typography>
                  <div className="divider"></div>

                  <Typography className="item" onClick={() => setCurrentTypeId(3)}>
                    تمام شده
                  </Typography>
                  <div className="divider"></div>

                  <Typography className="item" onClick={() => setCurrentTypeId(1)}>
                    نیمه تمام
                  </Typography>
                  <div className="divider"></div>

                  <Typography className="item" onClick={() => setCurrentTypeId(2)}>
                    بازسازی
                  </Typography>
                  <div className="divider"></div>
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </div>
      ) : (
        <CircularProgress style={{ marginTop: "10vh" }} />
      )}
    </>
  );
}
