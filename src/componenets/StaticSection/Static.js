import React from 'react';
import { Typography } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import BarChartIcon from '@material-ui/icons/BarChart';
import './Static.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#00303F',
      },
      secondary: {
        main: '#16697A',
      },
    },
});

export default function Additional() {
    return(
        <ThemeProvider theme={theme}>
        <div className='add-title'>
            <Typography className='title-text' variant="h5" component="h3"> 
                دستاورد ها
            </Typography>
            <BarChartIcon fontSize='large' color='primary' />
        </div>
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
                    <Typography variant="body1" color="textPrimary" component="p" gutterBottom>
                        تعداد پروژه ها
                    </Typography> 
                    <Divider variant='middle' style={{width: '100%'}} light={false} />
                    <Typography className='additionl__number' variant="body1" color="textPrimary" component="p">
                        ۱۰۰۰
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} className='additional__item'>
                <div className='back'>
                    <Typography variant="body1" color="textPrimary" component="p" gutterBottom>
                        خیرین
                    </Typography> 
                    <Divider variant='middle' style={{width: '100%'}} light={false} />
                    <Typography className='additionl__number' variant="body1" color="textPrimary" component="p">
                        ۲۳۳
                    </Typography> 
                </div>
            </Grid>
            <Grid item xs={12} sm={4} className='additional__item'>
                <div className='back'>
                    <Typography variant="body1" color="textPrimary" component="p">
                        سرمایه وقف شده
                    </Typography> 
                    <Divider variant='middle' style={{width: '100%'}} light={false} />
                    <Typography className='additionl__number' variant="body1" color="textPrimary" component="p">
                        ۱۲۰۰۰۰۰۰۰۰۰
                    </Typography>
                </div>
            </Grid>
        </Grid>
        </ThemeProvider>
    )
}