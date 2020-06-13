import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost/BlogPost';
import blogList from './BlogPost/blogs';

const styles = (theme) => ({
  content: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
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
            <Paper className={classes.paper}>
              {blogList.map((blog) => (
                <BlogPost
                  blogSideTags={blog.blogSideTags}
                  blogSideDate={blog.blogSideDate}
                  name={blog.name}
                  image={blog.image}
                  alt={blog.alt}
                  description={blog.description}
                  link={blog.link}
                />
              ))}
            </Paper>
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
