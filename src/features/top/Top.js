import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './topSlice';

export const Top = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <article>
      {posts.map(post => <p>{post.title}</p>)}
    </article>
  );
}