import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import {makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import './PhiloDetails.css';
import NumberCreator from "../common-components/NumberCreator";
import ToFarsiNumber from '../common-components/Converter';

const base = "http://charity.mykanoon.ir/api";

const useStyles=makeStyles(()=>({
    content: {
        margin: '0 auto ',
        padding: '2em 2em 5em',
        backgroundColor: '#F5F4F4',
        textAlign: "right"
    },
    pic:{
        width: "45%",
        minWidth: '30%',
        minHeight: '30%',
        maxWidth: '80%',
        maxHeight: '80%',
        borderRadius: '6px',
        backgroundColor: '#fff',
        transition: "all 0.5s",
        '&:hover': {
            width: '50%'
        }
    },
    activityHistory:{
        direction: "rtl",
        textAlign: "justify",
        textJustify: "inter-word"
    },
    project:{
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: "center",
        height: '6em',
    },
    projectPicDiv: {
        width: '50%',
        textAlign: 'right',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#a48668',
        color: '#000',
        width: '100%',
        borderRadius: '6px',
        paddingTop: '1em',
        paddingBottom: '1em',
        margin:'1em',
        display: "block",
        direction: 'ltr',
        transition: 'all 0.5s',
        '&:hover': {
            backgroundColor: '#4f463a',
            color: '#fff',
            borderRadius: '20px 4px'
        }
    }
}));

const PhiloDetails = () => {
    const classes=useStyles();
    const { id } = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        fetch(base + "/Tehran/Philanthropist?id=" + id ).then((response) =>
            response.json().then((response) => setData(response))
        );
    }, []);

    return (
        <div className={classes.content}>
            <div className='info-div'>
                <h1 className='title'>{`${data?.philanthropist?.firstName} ${data?.philanthropist?.lastName ? data?.philanthropist?.lastName : ''}`}</h1>
                <div className='info'>
                    <h3>شهر : {data?.philanthropist?.cityName}</h3>
                    <h3>تعداد پروژه ها : {data?.philanthropist?.projectCounts}</h3>
                    <h3>مبلغ اهداء شده : {ToFarsiNumber(NumberCreator(data?.philanthropist?.sparedFund))} تومان</h3>
                </div>
            </div>
            <div className='details'>
                <div className='card'>
                    <img src={`http://charity.mykanoon.ir/File/Get/${data?.philanthropist?.imageId}`} alt="philoPic" className={classes.pic}/>
                    <div className={classes.activityHistory}>{data?.philanthropist?.charityActivitiesHistory}</div>
                </div>
                <div className='projects'>
                    <h2>پروژه های خیر</h2>
                    {data?.projects.slice(0,data?.projects.length).map((item)=>(
                        <div>
                            <Link
                                to={item.typeId===1 ? `/half-built/${item.id}` :
                                    (item.typeId===2 ? `/overhauled/${item.id}` :
                                        (item.typeId===3 ? `/completed/${item.id}` :
                                            `/under-construction/${item.id}`))}>
                                <Button variant='contained' className={classes.button}>
                                    <div className={classes.project}>
                                        <div>
                                            <h3>{item?.title}</h3>
                                            <div><span>بودجه : </span>{ToFarsiNumber(NumberCreator(item.fund))}<span> تومان</span></div>
                                        </div>
                                        <div className={classes.projectPicDiv}>
                                            <img src={`http://charity.mykanoon.ir/File/Get/${item?.imageIds}`} alt="projectPic" className='project-pic'/>
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default PhiloDetails;