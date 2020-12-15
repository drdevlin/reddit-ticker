import React from 'react';
import { useSelector } from 'react-redux';

export const Top = () => {
  const posts = useSelector(state => state.posts);

  return (
    <article>
      {posts.map(post => <p>post.title</p>)}
    </article>
  );
}