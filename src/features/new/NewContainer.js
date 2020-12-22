import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectAllPosts, 
  selectStatus,
  selectError,
  fetchPosts 
} from './newSlice';
import './NewContainer.css';

import { New } from '../new/New';

export const NewContainer = () => {
  const [ groupNum, setGroupNum ] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(selectStatus);
  const error = useSelector(selectError);

  const postGroups = [];
  for (let i = 0; i < 6; i++) {
    const index = i * 4;
    postGroups.push(posts.slice(index, index + 4));
  }

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (groupNum < 5) {
        setGroupNum((prev) => prev + 1);
      } else {
        setGroupNum(0);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [groupNum])

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    const group = postGroups[groupNum];
    content = group.map(post => (
        <div  className='new-post'>
          <New title={post.data.title} key={post.data.id} />
        </div>
    ));
  } else if (postsStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section className='NewContainer'>
      {content}
    </section>
  );
}