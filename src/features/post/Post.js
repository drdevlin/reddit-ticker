import React from 'react';

export const Post = (props) => {
  const post = props.post;
  return (
    <article>
      <h2>{post.title}</h2>
      
    </article>
  );
}