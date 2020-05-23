import React from 'react';
import weekendfly from '../images/weekendfly.jpg';

function BlogPost(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.alt} />
      <p>{props.description}</p>
      {props.link}
    </div>
  );
}

export default BlogPost;
