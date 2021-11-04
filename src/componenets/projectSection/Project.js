import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import ToFarsiNumber from '../common-components/Converter';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 0,
        marginLeft: 8,
        marginRight: 8,
        maxHeight: 376,
        minHeight: 376,
        '& > *': {
            padding: '0',
            marginLeft: 0,
            marginRight: 0,
        },
    },
    content: {
        marginTop: '0.8em',

    },
    media: {
        marginTop: 0,
        height: 174,
        maxHeight: '30%',
        minHeight: '30%',
    },
    button: {
        width: '100%', 
        borderRadius: 0, 
        paddingTop: '1em', 
        paddingBottom: '1em', 
        textDecoration: 'none',
    }
});

export default function Project({id, path, theme, project}) {


    const backColor = ( path === 'overhauled' || path === 'under-construction' ) ? 'secondary' : 'primary';

    const classes = useStyles();

    const contrItem = (title, number) => {
        return(
            <div className={'pcontrs__item'}>
                <Typography variant="body1" component="p">
                    {number}
                </Typography>
                <Typography variant="body1" component="p">
                    {title}
                </Typography>
            </div>
        );
    }

    const contributions = () => {
        return(
            <div className='pcontrs'>
                {contrItem('شهر', project.cityName)}
                <Divider className='div' variant='middle' style={{width: '80%'}} light={true} />
                {contrItem('بودجه', ToFarsiNumber(project.fund))}
            </div>
        );
    }
  
    return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
            <CardMedia
                component="img"
                alt={project.title}
                className={classes.media}
                image={`http://charity.mykanoon.ir/File/Get/${project.imageIds[0]}`}
                title={project.title}
            />
            <CardContent className={classes.content}>
                <Typography gutterBottom variant="h6" component="h6">
                    {project.title}
                </Typography>
                {contributions()}
            </CardContent>
        <CardActions style={{padding: '0 !important'}}>
            <Link to={`/${path}/${id}`} style={{width: '100%'}}>
                <Button variant='contained' className={classes.button} color={backColor}>
                    اطلاعات بیشتر
                </Button>
            </Link>
        </CardActions>
      </Card>
    </ThemeProvider>
    );
}