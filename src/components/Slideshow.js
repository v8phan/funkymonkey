import React from 'react';
import { Slide } from 'react-slideshow-image';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import withWidth from '@material-ui/core/withWidth';

import 'react-slideshow-image/dist/styles.css';
import mfslide from '../images/mfslide.png';
import citypopslide from '../images/citypopslide.jpg';
import dgslide from '../images/dgslide.jpg';

const styles = {
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
      padding: '15px',
      fontSize: '15px',
      fontFamily: 'Roboto',
      background: '#efefef',
      textAlign: 'center',
      opacity: 0.7,
      position: 'absolute',
      bottom: 8,
      right: 16,
    },
  },
  eachSlideSmall: {
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'contain',
      height: 150,
      position: 'relative',
    },
    '& span': {
      padding: '10px',
      fontFamily: 'Roboto',
      fontSize: '12px',
      background: '#efefef',
      textAlign: 'center',
      opacity: 0.7,
      position: 'absolute',
      bottom: 8,
      right: 16,
    },
  },
};

function Slideshow(props) {
  const { classes, width } = props;
  return (
    <div>
      <Slide easing="ease">
        <div
          className={
            width === 'xs' ? classes.eachSlideSmall : classes.eachSlide
          }
        >
          <div style={{ backgroundImage: `url(${mfslide})` }}>
            <span>MF DOOM</span>
          </div>
        </div>
        <div
          className={
            width === 'xs' ? classes.eachSlideSmall : classes.eachSlide
          }
        >
          <div style={{ backgroundImage: `url(${citypopslide})` }}>
            <span>Makoto Matsushita</span>
          </div>
        </div>
        <div
          className={
            width === 'xs' ? classes.eachSlideSmall : classes.eachSlide
          }
        >
          <div style={{ backgroundImage: `url(${dgslide})` }}>
            <span>Death Grips</span>
          </div>
        </div>
      </Slide>
    </div>
  );
}

Slideshow.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};
export default compose(withStyles(styles), withWidth())(Slideshow);
