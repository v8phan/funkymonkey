import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import blogList from './blogs';
import blogs from './blogs.js';

function postSeparate(props) {
  return (
    <div>
      {blogList
        .filter((blog) => blog.id == props.match.params.id)
        .map((filteredBlog) => {
          return (
            <div>
              {filteredBlog.sepContent ? (
                <div>
                  {filteredBlog.name}
                  {filteredBlog.description}
                  {filteredBlog.sepContent}
                  {filteredBlog.blogSideDate}
                  {filteredBlog.blogSideTags}
                </div>
              ) : (
                <div>
                  {filteredBlog.name}
                  {filteredBlog.description}
                  {filteredBlog.image}
                  {filteredBlog.link}
                  {filteredBlog.blogSideDate}
                  {filteredBlog.blogSideTags}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default postSeparate;
