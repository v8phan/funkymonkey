import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = (theme) => ({
  footer: {
    padding: 5,
    position: 'relative',
    textAlign: 'left',
    left: 0,
    bottom: 0,
    right: 0,
    top: 20,
    backgroundColor: 'black',
  },
  footerTitle: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    color: 'white',
  },
  socialFooter: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  gitHubIcon: {
    color: 'white',
  },
  websiteNameFooter: {
    backgroundColor: 'black',
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    function handleOnClick() {
      window.open('https://whatafunkymonkey.wordpress.com');
    }

    return (
      <div>
        <div className={classes.footer}>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} className={classes.footerTitle}>
                <span
                  className={classes.websiteNameFooter}
                  tabIndex={0}
                  role="button"
                  focusable
                  onClick={handleOnClick}
                  onKeyPress={handleOnClick}
                >
                  The Funky Monkey
                </span>
              </Grid>
              <Grid item xs={12} md={6} className={classes.socialFooter}>
                <a href="https://www.github.com">
                  <GitHubIcon className={classes.gitHubIcon} />
                </a>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
