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
    backgroundColor: 'none',
  },
  footerTitle: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    color: 'black',
  },
  socialFooter: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  gitHubIcon: {
    color: 'black',
  },
  websiteNameFooter: {
    backgroundColor: 'none',
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    function handleOnClick() {
      window.open('https://whatafunkymonkey.wordpress.com');
    }

    return (
      <div className={classes.footer}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className={classes.footerTitle}>
              <span classname={classes.websiteNameFooter}
                role="button"
                focusable={true}
                onClick={handleOnClick}
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
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
