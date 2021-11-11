import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from '@material-ui/core';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ToFarsiNumber from '../componenets/common-components/Converter';
import NumberCreator from "../componenets/common-components/NumberCreator";

const base='http://charity.mykanoon.ir/api';

const useStyles=makeStyles(()=>({
    content: {
        margin: '1em auto 0',
        padding: '2em 2em 5em',
        "@media (max-width: 800px)": {
            padding: '2em 0em 5em'
        }
    },
    project: {
        backgroundColor: '#16697a',
        color: '#fff',
        margin: '0.7em',
        borderRadius: '6px',
        
    },
    projectPic:{
        backgroundColor: '#fff',
        margin: '0.8em auto',
        height: 175,
        maxHeight: '40%',
        minHeight: '40%',
        maxWidth: '90%',
        borderRadius: '6px'
    },
    info: {
        backgroundColor: '#16697a',
        color: '#fff',
        margin: '0.8em auto',
        textAlign: "center",
    },
    title: {
        backgroundColor: '#fff',
        color: '#212121',
        width: '90%',
        margin: '0 auto 0.5em',
        borderRadius: '4px',
        "@media (max-width: 800px)": {
            fontSize: 18,
            width: '95%'
         }
    },
    button: {
        backgroundColor: '#00303F',
        color: '#fff',
        width: '100%',
        borderRadius: '0 0 6px 6px',
        paddingTop: '1em',
        paddingBottom: '1em',
        '&:hover': {
            backgroundColor: '#00171a'
        },
        
    }
}));

export default function AllProjects() {
    const classes=useStyles();

    const [data,setData]=useState();
    useEffect(()=>{
        fetch(base+'/Tehran/ProjectGroup').then((response)=>
            response.json().then((response)=>setData(response)));
    },[]);

    return(
        <>
        { data ?  (
        <Grid className={classes.content} container>
            {data?.projects.map((item)=>(
                <Grid lg={4} sm={6} xs={12} item key={item.id}>
                    <div className={classes.project}>
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
                    </div>
                </Grid>
            ))}
        </Grid>
         ) : (
            <CircularProgress style={{marginTop: '10vh'}} />
        )}
        </>
    );
}