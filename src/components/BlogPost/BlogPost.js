import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Divider, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  content: {
    flexGrow: 1,
  },
  description: {
    // margin: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(
    //   2
    // )}px 0px`,
    margin: '16px 16px',
    marginRight: '20px',
    textAlign: 'left',
    color: 'black',
    opacity: 0.8,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  descSmall: {
    fontFamily: 'Roboto',
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    maxHeight: '800px',
    width: '70%',
  },
  blogSide: {
    marginTop: '10px',
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
    float: 'left',
    color: 'black',
    paddingBottom: 50,
    '&:hover': {
      color: 'red',
    },
  },
  linkSmall: {
    fontSize: 24,
    fontFamily: 'Inconsolata',
    fontWeight: 'bold',
    textDecoration: 'none',
    paddingRight: '0px',
    float: 'left',
    color: 'black',
    paddingBottom: 50,
    '&:hover': {
      color: 'red',
    },
  },
  divider: {
    marginBottom: 30,
  },
  dividerSmall: {
    marginBottom: 20,
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
    width,
  } = props;

  const smallScreen = width === 'xs';

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid className={classes.blogSide} item xs={12} md={3}>
          <Grid>{blogSideDate}</Grid>
          {blogSideTags}
        </Grid>
        <Grid item lg={9} xs={12}>
          <Link
            className={smallScreen ? classes.linkSmall : classes.link}
            to={{
              pathname: `/blogs/${id}`,
            }}
          >
            <span>{name}</span>
          </Link>
          {image && <img className={classes.image} src={image} alt={alt} />}
          <div
            className={width === 'xs' ? classes.descSmall : classes.description}
          >
            {description}
          </div>
          <div className={classes.mediaContainer}>{link}</div>
        </Grid>
      </Grid>
      <Divider
        className={width === 'xs' ? classes.dividerSmall : classes.divider}
      />
    </Container>
  );
}

BlogPost.defaultProps = {
  image: '',
  alt: '',
  link: '',
};

BlogPost.propTypes = {
  classes: PropTypes.object.isRequired,
  blogSideDate: PropTypes.string.isRequired,
  blogSideTags: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.string.isRequired,
  // divider: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};
export default compose(withStyles(styles), withWidth())(BlogPost);
