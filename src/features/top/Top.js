import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
  selectAllPosts, 
  selectStatus,
  selectError, 
  fetchPosts 
} from './topSlice';
import { selectExternalPost, selectMode } from '../post/viewPortSlice';
import { Post } from '../post/Post';

import { extractImage } from '../helpers/helpers';
import './Top.css';

export const Top = () => {
  const [ postNum, setPostNum ] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(selectStatus);
  const error = useSelector(selectError);
  const viewPort = useSelector(selectMode);
  const externalPost = useSelector(selectExternalPost);

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
    const image = extractImage(post);
    content = (
      <section className='current-top-post'>
        <div className='top-image'>
          {image}
        </div>
        <div className='top-title'>
          <h1>{post.title.toUpperCase()}</h1>
        </div>
      </section>
    );
  } else if (postsStatus === 'failed') {
    content = <div>{error}</div>;
  }

  if (viewPort) {
    content = <Post post={externalPost} />
  }

  return (
    <article className='Top'>
      {content}
    </article>
  );
}