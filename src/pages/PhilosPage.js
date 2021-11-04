import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ToFarsiNumber from '../componenets/common-components/Converter';
import NumberCreator from "../componenets/common-components/NumberCreator";
import { CircularProgress } from '@material-ui/core';

const base='http://charity.mykanoon.ir/api';

const useStyles=makeStyles(()=>({
    content: {
        margin: '1em auto 0',
        padding: '2em 2em 5em'
    },
    philo: {
        backgroundColor: '#CDAC81',
        color: '#000',
        margin: '0.7em',
        borderRadius: '6px'
    },
    philoPic: {
        backgroundColor: '#fff',
        margin: '0.8em auto',
        height: 175,
        maxHeight: '30%',
        minHeight: '30%',
        maxWidth: '90%',
        borderRadius: '6px'
    },
    name: {
        backgroundColor: '#fff',
        color: '#212121',
        width: '90%',
        margin: '0 auto 0.5em',
        borderRadius: '4px'
    },
    info: {
        backgroundColor: '#CDAC81',
        color: '#000',
        margin: '0.8em auto',
        textAlign: "center"
    },
    button: {
        backgroundColor: '#867257',
        color: '#000',
        width: '100%',
        borderRadius: '0 0 6px 6px',
        paddingTop: '1em',
        paddingBottom: '1em',
        '&:hover': {
            backgroundColor: '#4f463a',
            color: '#fff'
        }
    }
}));

export default function AllPhilos() {
    const classes=useStyles();

    const [data, setData]=useState();
    useEffect(()=> {
        fetch(base+'/Tehran/PhilanthropistGroup').then((response)=>
            response.json().then((response)=>setData(response))
        );
    }, []);

    return (
        <>
        { data ?  (
        <Grid className={classes.content} container>
            {data?.philanthropists.map((item)=>(
                <Grid lg={4} sm={6} xs={12} item className={classes.grid}>
                    <div className={classes.philo}>
                        <img src={`http://charity.mykanoon.ir/File/Get/${item.imageId}`} alt="philoPic" className={classes.philoPic}/>
                        <h3 className={classes.name}>{`${item.firstName} ${item.lastName ? item.lastName : ''}`}</h3>
                        <div className={classes.info}>
                            <div>مبلغ اهدا شده : {ToFarsiNumber(NumberCreator(item.sparedFund))}<span> تومان</span></div>
                            <div>{item.cityName}</div>
                        </div>
                        <div>
                            <Link to={`/Philanthropists/${item.id}`}>
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
    )
}