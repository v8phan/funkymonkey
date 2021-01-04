import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Container } from '@material-ui/core';

import blogList from './blogs';
import blogs from './blogs.js';

function postSeparate(props) {
  return (
    <Container >
      {blogList
        .filter((blog) => blog.id == props.match.params.id)
        .map((filteredBlog) => {
          return (
            <div>
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

export default postSeparate;
