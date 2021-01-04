import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  sidebarTitle: {
    marginTop: '50px',
  },
});

class Sidebar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.sidebarTitle}>
          <br />
          <Typography gutterBottom variant="h6">
            VIET'S MUSIC BLOG
          </Typography>
          <p>I listen to a bit of everything, let me know if you dig it.</p>
          <br />
          <iframe
            title="stevie wonder video"
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/PnR19INlXV8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
