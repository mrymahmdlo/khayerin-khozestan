import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import './Static.css';


export default function Additional({staticData}) {
    return(
       
        <Grid
            container
            spacing={1}
            className='additional'
            direction='row'
            alignItems='center'
            justifyContent='center'
        >
            <Grid item xs={12} sm={4} className='additional__item'>
                <div className='back'>
                    <Typography className='additionl__number' variant="body1" component="p">
                        {staticData.projectCount} 
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p" gutterBottom>
                         پروژه ها
                    </Typography> 
                </div>
            </Grid>
            <Grid item xs={12} sm={4} className='additional__item'>
                <div className='back'>
                    <Typography className='additionl__number' variant="body1" component="p">
                        {staticData.philanthropistCount} 
                    </Typography> 
                    <Typography variant="body1" component="p" gutterBottom>
                        خیرین
                    </Typography> 
                </div>
            </Grid>
            <Grid item xs={12} sm={4} className='additional__item'>
                <div className='back'>
                    <Typography className='additionl__number' variant="body1" component="p">
                        {staticData.budget} 
                    </Typography>
                    <Typography variant="body1" component="p">
                        سرمایه وقف شده
                    </Typography> 
                    
                </div>
            </Grid>
        </Grid>

    )
}