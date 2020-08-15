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

export default withStyles(styles)(About);
