import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import CallIcon from '@material-ui/icons/Call';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/images/khayerin-logo.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import './footer.css';

const useStyles = makeStyles(() => ({
    grid: {
        display:'flex',
        maxHeight: '100%',
        height: '100%',
        margin: 0,
        textAlign: 'right',
        paddingBottom: 70
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        '& > *': {
            marginBottom: '0.5em',
        }
    },
    div: {
        backgroundColor: '#fff',
        marginBottom: '1em',
    },
    title: {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%', 
        paddingBottom: 0,
    },
    title__item: {
        width: '100%',
        textAlign: 'right',
        color: "#fff",
        marginBottom: 20,
        marginRight: '8%'
    }
}));

export default function Footer() {

    const classes = useStyles();

    return(
        <div className='footer'>
            <div className='content footer__content'>
                <div className={classes.title} style={{paddingTop: 24, paddingBottom: 0}}>
                <Typography variant='h5' component='h5' className={classes.title__item}>
                    مجمع خیرین مدرسه ساز خوزستان
                </Typography>
                </div>
                <Grid
                    container
                    className={classes.grid}
                    spacing={3}
                    direction='row'
                    justifyContent='space-around'
                >
                    <Grid item className={classes.item} xs={12} sm={4}>
                        <Typography variant='body1' component='h6' style={{color:'#fff'}}>
                            درباره موسسه
                        </Typography>
                        <Divider variant='fullWidth' className={classes.div} />
                        <Typography variant='body2' component='p'>
                            اطلاعات در مورد سایت افزوده شود
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item} xs={12} sm={4}>
                        <Typography variant='body1' component='h6' style={{color:'#fff'}}>
                            ارتباط با موسسه
                        </Typography>
                        <Divider variant='fullWidth' className={classes.div} />
                        <Typography className={classes.title} variant='body2' component='p'>
                            0921212121-32323232
                            <CallIcon style={{marginLeft: 10}} />
                        </Typography>
                        <Typography className={classes.title} variant='body2' component='p'>
                            تهران
                            <LocationOnIcon style={{marginLeft: 10}} />
                        </Typography>
                        <Typography className={classes.title} variant='body2' component='p'>
                            info@ds.ir
                            <EmailIcon style={{marginLeft: 10}} />
                        </Typography>
                    </Grid>
                </Grid>
            </div> 
        </div>
    )
}