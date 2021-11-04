import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Picture from '../../assets/images/covid_rolling.jpg';
import './PostCard.css';

const useStyles = makeStyles({
    root: {
        textAlign: 'right', 
        width: '100%',
        borderRadius: 0,
        backgroundColor: '#00303F',
        color: '#fff',
    },
    media: {
        height: '78%',
    },
    action: {
        height: '100%',
    },
    content: {
        padding: '1em',
        paddingTop: '0.5em',
        paddingBottom: '0.5em',
        paddingRight: '1.2em',
        height: '22%',

    },
    contentTitle: {
        fontWeight: 700,
        fontSize: '1.2rem',
        marginBottom: '0.2em',
    }
});

export default function MainNewsCard({mainData}) {
    const classes = useStyles();

  return (
    
        <Card 
            className={classes.root+ ' main-news-card'}
        >
            <CardActionArea className={classes.action}>
                <CardMedia
                    className={`${classes.media} main-news__media`}
                    image= {mainData.imageIds[0] ? `http://charity.mykanoon.ir/File/Get/${mainData.imageIds[0]}` : Picture}
                    title="News"
                />
                <CardContent className={`${classes.content} main-news-content`}>
                    <Typography className={`${classes.contentTitle} content__item`} variant="h6">
                        {mainData.title}
                    </Typography>
                    
                    <Typography gutterBottom className='content__item' variant="body1" component="p">
                        {mainData.summary}
                    </Typography>
                </CardContent>
                <div className='card__overlay'/>
            </CardActionArea>
    </Card>
    
  );

}