import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, fetchPosts } from './topSlice';

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
    }, 10000);
    return () => clearInterval(intervalId);
  }, [postNum])

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    const post = posts[postNum].data;
    content = (
      <section>
        <h1>Top Stories</h1>
        {Boolean(post.thumbnail) && <img src={post.thumbnail} alt='' />}
        <h2>{post.title}</h2>
      </section>
    );
  } else if (postsStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <article>
      {content}
    </article>
  );
}