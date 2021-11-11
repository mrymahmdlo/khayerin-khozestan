import { React } from "react";
import PhiloCard from './PhiloCard.js';
import Carousel from "react-multi-carousel";
import PersonIcon from '@material-ui/icons/Person';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import '../common-components/carouselStyle.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

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


export default function PhiloCarousel(philosData) {

  return(
      <ThemeProvider theme={theme}>
        <div className='add-title' style={{marginBottom: '0px !important'}}>
            <Typography className='title-text' variant="h5" component="h3"> 
              خیرین
            </Typography>
            <PersonIcon fontSize='large' color='primary' />
        </div>
        <Carousel responsive={responsive} >
            {philosData.philosData[0].data.map(item => (
                <PhiloCard key={item.id} id={item.id} philoData={item} key={item.id} />
            ))}
        </Carousel>
      </ThemeProvider>
  )
}