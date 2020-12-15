import React from 'react';
import { useSelector } from 'react-redux';

export const Top = () => {
  const posts = useSelector(state => state.top.posts);

  return (
    <article>
      {posts.map(post => <p>{post.title}</p>)}
    </article>
  );
}