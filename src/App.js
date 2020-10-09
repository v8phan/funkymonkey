import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import postSeparate from './components/BlogPost/postSeparate';

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
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Page} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blogs/:id" component={postSeparate} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
