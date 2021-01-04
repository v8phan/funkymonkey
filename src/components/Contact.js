import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  title: {
    color: 'default',
    marginLeft: '50px',
  },
  paragraph: {
    marginLeft: '100px',
  },
});

class Contact extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1 className={classes.title}>Contact Me</h1>
        <p className={classes.paragraph}>
          Email me if you want to give me a job or something.
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
