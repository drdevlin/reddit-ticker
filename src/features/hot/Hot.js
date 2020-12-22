import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectAllPosts, 
  selectStatus,
  selectError,
  fetchPosts 
} from './hotSlice';
import './Hot.css';

import { Post } from '../post/Post';

export const Hot = () => {
  const [ postNum, setPostNum ] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(selectStatus);
  const error = useSelector(selectError);

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
    <article className='Hot'>
      <div className='hot-title'>
        <h1>Hot Now</h1>
      </div>
      <div className='hot-content'>
        {content}
      </div>
    </article>
  );
}