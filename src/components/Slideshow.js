import React from 'react';
import { Slide } from 'react-slideshow-image';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import 'react-slideshow-image/dist/styles.css';

import mfslide from '../images/mfslide.png';
import citypopslide from '../images/citypopslide.jpg';
import dgslide from '../images/dgslide.jpg';

const styles = (theme) => ({
  eachSlide: {
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'contain',
      height: 300,
      position: 'relative',
    },
    '& span': {
      padding: '20px',
      fontSize: '15px',
      background: '#efefef',
      textAlign: 'center',
      opacity: 0.7,
      position: 'absolute',
      bottom: 8,
      right: 16,
    },
  },
});

function Slideshow(props) {
  const { classes } = props;
  return (
    <div>
      <Slide easing="ease">
        <div className={classes.eachSlide}>
          <div style={{ backgroundImage: `url(${mfslide})` }}>
            <span>MF DOOM</span>
          </div>
        </div>
        <div className={classes.eachSlide}>
          <div style={{ backgroundImage: `url(${citypopslide})` }}>
            <span>Makoto Matsushita</span>
          </div>
        </div>
        <div className={classes.eachSlide}>
          <div style={{ backgroundImage: `url(${dgslide})` }}>
            <span>Death Grips</span>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default withStyles(styles)(Slideshow);
