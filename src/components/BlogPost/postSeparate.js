import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { render } from '@testing-library/react';
import { Container } from '@material-ui/core';
import blogList from './blogs';

const styles = {
  test: {
    color: 'red',
  },
};

function postSeparate(props) {
  const { classes } = props;

  return (
    <Container>
      {blogList
        .filter((blog) => blog.id === props.match.params.id)
        .map((filteredBlog) => {
          return (
            <div className={classes.test}>
              {filteredBlog.name}
              {filteredBlog.description}
              {filteredBlog.sepContent ? (
                filteredBlog.sepContent
              ) : (
                <div>
                  {filteredBlog.image}
                  {filteredBlog.link}
                </div>
              )}
              {filteredBlog.blogSideDate}
              {filteredBlog.blogSideTags})
            </div>
          );
        })}
    </Container>
  );
}

export default withStyles(styles)(postSeparate);
