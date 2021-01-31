import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost/BlogPost';
import blogList from './BlogPost/blogs';
import Sidebar from './Sidebar';

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: 'white',
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
              {blogList.map((blog, index) => {
                console.log(blog);
                return (
                  <BlogPost
                    blogSideTags={blog.blogSideTags}
                    blogSideDate={blog.blogSideDate}
                    name={blog.name}
                    image={blog.image}
                    alt={blog.alt}
                    description={blog.description}
                    link={blog.link}
                    index={index}
                    id={blog.id}
                    sepContent={blog.sepContent}
                  />
                );
              })}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Sidebar />
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
