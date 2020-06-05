import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({
  content: {
    flexGrow: 1,
  },
  description: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  image: {
    maxHeight: '800px',
    width: '70%',
  },
  blogSide: {
    marginTop: '120px',
  },
});

function BlogPost(props) {
  const { classes } = props;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid className={classes.blogSide} item xs={3}>
          <Grid>{props.blogSideDate}</Grid>
          {props.blogSideTags}
        </Grid>
        <Grid item xs={9}>
          <h1>{props.name}</h1>
          {props.image && (
            <img className={classes.image} src={props.image} alt={props.alt} />
          )}
          <p className={classes.description}>{props.description}</p>
          {props.link}
        </Grid>
      </Grid>
      <Divider />
    </Container>
  );
}

export default withStyles(styles)(BlogPost);
