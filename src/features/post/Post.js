import React from 'react';

export const Post = (props) => {
  const post = props.post;
  return <p>{post.title}</p>;
}