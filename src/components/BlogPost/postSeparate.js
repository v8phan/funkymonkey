import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Container } from '@material-ui/core';
import Footer from '../Footer';
import blogList from './blogs';

const styles = {
  filteredBlogName: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 24,
    marginTop: 20,
  },
  filteredBlogDescription: {
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  sepContent: {
    justifyContent: 'space-around',
  },
};

function postSeparate(props) {
  const { classes, match } = props;

  return (
    <Container>
      {blogList
        .filter((blog) => blog.id === match.params.id)
        .map((filteredBlog) => {
          return (
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} lg={6}>
                <div className={classes.filteredBlogName}>
                  {filteredBlog.name}
                </div>
                <div className={classes.filteredBlogDescription}>
                  {filteredBlog.description}
                </div>
                {filteredBlog.blogSideDate}
                <br />
                {filteredBlog.blogSideTags}
              </Grid>
              <Grid item lg={6} sm={6} className={classes.sepContent}>
                {filteredBlog.sepContent ? (
                  filteredBlog.sepContent
                ) : (
                  <Grid>
                    {filteredBlog.image}
                    {filteredBlog.link}
                  </Grid>
                )}
              </Grid>
            </Grid>
          );
        })}
      <Footer />
    </Container>
  );
}

postSeparate.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withStyles(styles)(postSeparate);
