import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = {
  sidebarBox: {
    marginTop: '50px',
    paddingRight: '50px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  sidebarTitle: {
    marginLeft: '30px',
    marginRight: '30px',
    fontFamily: 'Inconsolata',
  },
};

class Sidebar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.sidebarBox}>
          <br />
          <Typography
            className={classes.sidebarTitle}
            gutterBottom
            variant="h6"
          >
            VIET&apos;S MUSIC BLOG
          </Typography>
          <p className={classes.sidebarTitle}>
            I listen to a bit of everything, let me know if you dig it.
          </p>
          <br />
          <iframe
            width="auto"
            height="300"
            src="https://www.youtube.com/embed/Vo8PP7aBqOk"
            frameBorder="0"
            title="sunshinekiz"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Paper>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
