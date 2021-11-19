import { React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./contributions.css";
import ToFarsiNumber from "../common-components/Converter";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 8px",
    width: "95%",
    color: "#fff",
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    marginBottom: "1vh",
    borderRadius: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    paddingTop: "2vh",
    borderRadius: "5px",
    overflow: "hidden",
  },
  card__overlay: {
    opacity: 0,
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.25s",
    "&:hover": {
      opacity: 1,
    },
    "&:hover > *": {
      transform: "translateY(0)",
    },
    "& > *": {
      transform: "translateY(20px)",
      transition: "transform 0.25s",
    },
  },
  circle: {
    position: "relative",
    display: "flex",
    overflow: "hidden",
    borderRadius: "50%",
    backgroundColor: "#fff",
  },
  image: {
    position: "absolute",
    top: 0,
    margin: "auto",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
  },
}));

export default function PhiloCard({ id, philoData }) {
  const classes = useStyles();

  const fullName =
    philoData.lastName !== null
      ? philoData.firstName + " " + philoData.lastName
      : philoData.firstName;

  const contrItem = (title, number) => {
    return (
      <div className={"contrs_item"}>
        <Typography variant="body2" component="p" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {number}
        </Typography>
      </div>
    );
  };

  const contributions = () => {
    return (
      <div className="contrs">
        {contrItem("مبلغ اهدا شده", ToFarsiNumber(philoData.sparedFund))}
        {contrItem("تعداد پروژه", ToFarsiNumber(philoData.projectCounts))}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.card} elevation={2}>
        <div className={`${classes.large} ${classes.circle}`}>
          <img
            alt={philoData.firstName}
            src={`http://charity.mykanoon.ir/File/Get/${philoData.imageId}`}
            className={`${classes.image}`}
          />
        </div>
        <Typography style={{ fontSize: "1.1em" }} variant="body1" gutterBottom>
          {fullName}
        </Typography>
        <Typography
          variant="body2"
          color="textPrimary"
          component="p"
          gutterBottom
        >
          تهران
        </Typography>
        {contributions()}
        <div className={classes.card__overlay}>
          <Link to={`/Philanthropists/${id}`}>
            <Button variant="contained">اطلاعات بیشتر</Button>
          </Link>
        </div>
      </Paper>
    </div>
  );
}
