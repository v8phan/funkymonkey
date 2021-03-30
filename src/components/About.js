import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Footer from './Footer';

const styles = {
  title: {
    color: 'default',
    marginLeft: '50px',
  },
  paragraph: {
    marginLeft: '100px',
  },
  main: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 'auto',
  },
  content: {
    flex: '1 0 auto',
  },
  footer: {
    color: 'white',
  },
};

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.content}>
          <h1 className={classes.title}>About Me</h1>
          <p className={classes.paragraph}>
            My name is Viet Phan, and I am creating this website to get a job.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(About);
