import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, fetchPosts } from './newSlice';

import { New } from '../new/New';

export const NewContainer = () => {
  const [ postNum, setPostNum ] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(state => state.new.status);
  const error = useSelector(state => state.new.error);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (postNum < 20) {
  //       setPostNum((prev) => prev + 1);
  //     } else {
  //       setPostNum(0);
  //     }
  //   }, 20000);
  //   return () => clearInterval(intervalId);
  // }, [postNum])

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    const post = posts[postNum].data;
    content = <New title={post.title} />;
  } else if (postsStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h1>New</h1>
      {content}
    </section>
  );
}