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
};

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1 className={classes.title}>About Me</h1>
        <p className={classes.paragraph}>
          My name is Viet Phan, and I am creating this website to get a job.
        </p>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(About);
