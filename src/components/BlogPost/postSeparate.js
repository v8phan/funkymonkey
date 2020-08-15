import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import blogs from './BlogPost/blogs';


const sepBlogs = [
  {
    id: '1',
    description: 'penis',
  },
  {
    id: '2',
    description: 'penis2',
  },
  {
    id: '3',
    description: 'penis3',
  },
];

function postSeparate(props) {
  const { id, description } = props;
  console.log(props);
  return <div>{sepBlogs[props.match.params.id].description}</div>;
}

export default postSeparate;
