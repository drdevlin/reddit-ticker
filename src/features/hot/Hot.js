import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, fetchPosts } from './hotSlice';

import { Post } from '../post/Post';

export const Hot = () => {
  const [ postNum, setPostNum ] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(state => state.hot.status);
  const error = useSelector(state => state.hot.error);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (postNum < 20) {
        setPostNum((prev) => prev + 1);
      } else {
        setPostNum(0);
      }
    }, 20000);
    return () => clearInterval(intervalId);
  }, [postNum])

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    const post = posts[postNum].data;
    content = <Post post={post} />;
  } else if (postsStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <article>
      <h1>Hot Now</h1>
      {content}
    </article>
  );
}