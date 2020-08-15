import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Divider, Container } from '@material-ui/core';

const styles = (theme) => ({
  content: {
    flexGrow: 1,
  },
  description: {
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(
      2
    )}px 0px`,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  image: {
    maxHeight: '800px',
    width: '70%',
  },
  blogSide: {
    marginTop: '100px',
  },
  mediaContainer: {
    marginBottom: '50px',
  },
});

function BlogPost(props) {
  const {
    classes,
    blogSideDate,
    blogSideTags,
    name,
    image,
    alt,
    description,
    link,
  } = props;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid className={classes.blogSide} item xs={12} md={3}>
          <Grid>{blogSideDate}</Grid>
          {blogSideTags}
        </Grid>
        <Grid item xs={9}>
          <h1>{name}</h1>
          {image && <img className={classes.image} src={image} alt={alt} />}
          <p className={classes.description}>{description}</p>
          <div className={classes.mediaContainer}>{link}</div>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  );
}

export default withStyles(styles)(BlogPost);
