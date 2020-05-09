import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Navbar from './components/Navbar';
import Page from './components/Page';
import Footer from './components/Footer';

const styles = {
  app: {
    padding: 0,
    margin: 0,
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.app}>
      <Navbar />
      <Page />
      <Footer />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
