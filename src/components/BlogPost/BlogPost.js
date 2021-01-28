import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Divider, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  content: {
    flexGrow: 1,
  },
  description: {
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(
      1
    )}px 0px`,
    textAlign: 'left',
    color: 'black',
    opacity: 0.8,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  image: {
    maxHeight: '800px',
    width: '70%',
    paddingTop: 50,
  },
  blogSide: {
    marginTop: '100px',
    fontFamily: 'Roboto',
    fontWeight: '100',
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  mediaContainer: {
    marginBottom: '50px',
  },
  link: {
    fontSize: 36,
    fontFamily: 'Inconsolata',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      color: 'red',
    },
  },
  divider: {
    marginBottom: 30,
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
    id,
    divider,
  } = props;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid className={classes.blogSide} item xs={12} md={3}>
          <Grid>{blogSideDate}</Grid>
          {blogSideTags}
        </Grid>
        <Grid item xs={9}>
          <Link
            className={classes.link}
            to={{
              pathname: `/blogs/${id}`,
            }}
          >
            <span>{name}</span>
          </Link>
          {image && <img className={classes.image} src={image} alt={alt} />}
          <p className={classes.description}>{description}</p>
          <div className={classes.mediaContainer}>{link}</div>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Container>
  );
}

export default withStyles(styles)(BlogPost);

//final stop
