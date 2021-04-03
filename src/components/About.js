import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  title: {
    color: 'default',
    marginLeft: '50px',
  },
  paragraph: {
    marginLeft: '100px',
  },
  content: {
    flex: '1 0 auto',
    height: '100vh',
  },
  main: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 'auto',
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
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(About);
