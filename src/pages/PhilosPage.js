import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import ToFarsiNumber from '../componenets/common-components/Converter';
import NumberCreator from "../componenets/common-components/NumberCreator";
import { CircularProgress } from '@material-ui/core';
import './PhilosPage.css';
import banknote from '../assets/images/banknotes-icon.png';
import location from '../assets/images/location-icon.png';

const base='http://charity.mykanoon.ir/api';

const useStyles=makeStyles(()=>({
    content: {
        padding: '0em 2em 5em'
    },
    philo: {
        backgroundImage: 'radial-gradient(ellipse farthest-corner at 0 140%, rgba(0,191,3, 0.05) 0%, rgba(0,191,3, 0.05) 70%, rgba(0,191,3, 0.15) 70%)',
        color: '#000',
        margin: '0.7em',
        borderRadius: '6px',
        boxShadow: '3px 5px 14px -2px rgba(0,0,0,0.4)'
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
        borderRadius: '4px',
        border: '1px solid #20C679'
    },
    info: {
        color: '#000',
        margin: '0.8em auto',
        textAlign: "center"
    },
    icon: {
        width: '20px',
        marginBottom: '-5px',
        marginLeft: '2px'
    },
    button: {
        backgroundColor: '#fff',
        color: '#000',
        width: '100%',
        height: '50px',
        borderRadius: '0 0 6px 6px',
        paddingTop: '1em',
        paddingBottom: '1em',
        fontSize: '14px',
        borderTop: '1px solid #20C679',
        transition: 'all 0.5s',
        '&:after': {
            display:'block',
            content: '',
            borderBottom: 'solid 3px #000',
            transform: 'scaleX(0)',
            transition: 'transform 500ms ease-in-out',
        },
        '&:hover:after': {
            color: '#48dd8e',
            transform: 'scaleX(1)'
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
                <Grid lg={4} sm={6} xs={12} item className={classes.grid} key={item.id}>
                    <div className={classes.philo}>
                        <img src={`http://charity.mykanoon.ir/File/Get/${item.imageId}`} alt="philoPic" className={classes.philoPic}/>
                        <h3 className={classes.name}>{`${item.firstName} ${item.lastName ? item.lastName : ''}`}</h3>
                        <div className={classes.info}>
                            <div>
                                <span>مبلغ اهدا شده : {ToFarsiNumber(NumberCreator(item.sparedFund))}<span> تومان</span></span>
                                <img src={banknote} alt="sparedFund" className={classes.icon}/>
                            </div>
                            <div>
                                <span>شهر : {item.cityName}</span>
                                <img src={location} alt="cityName" className={classes.icon}/>
                            </div>
                        </div>
                        <div>
                            <Link to={`/Philanthropists/${item.id}`}>
                                <div className='info-button'>
                                    <div className='button-title'>اطلاعات بیشتر</div>
                                </div>
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