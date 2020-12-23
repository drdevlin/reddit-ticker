import React from 'react';
import { useDispatch } from 'react-redux';

import { setPost } from '../post/viewPortSlice';

export const New = ({ post }) => {
  const dispatch = useDispatch();
  const title = post.title;
  
  const isLong = title.length > 60;
  const shortenedTitle = title.substring(0, 60);

  const handlePostClick = () => {
    dispatch(setPost(post));
  }

  return (
    <article onClick={handlePostClick}>
      {isLong ? <p>{shortenedTitle}...</p> : <p>{title}</p>}
    </article>
  );
}