import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, fetchPosts } from './topSlice';
import './Top.css';

export const Top = () => {
  const [ postNum, setPostNum ] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(state => state.top.status);
  const error = useSelector(state => state.top.error);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (postNum < 10) {
        setPostNum((prev) => prev + 1);
      } else {
        setPostNum(0);
      }
    }, 40000);
    return () => clearInterval(intervalId);
  }, [postNum])

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    const post = posts[postNum].data;
    content = (
      <section className='current-top-post'>
        <div className='top-image'>
          {Boolean(post.thumbnail) && <img src={post.thumbnail} alt='' />}
        </div>
        <div className='top-title'>
          <h1>{post.title.toUpperCase()}</h1>
        </div>
      </section>
    );
  } else if (postsStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <article className='Top'>
      {content}
    </article>
  );
}