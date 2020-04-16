import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  content: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Page(props) {
  const { classes } = props;

  return (
    <div className={classes.content}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>Main Content</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>Sidebar</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page);
