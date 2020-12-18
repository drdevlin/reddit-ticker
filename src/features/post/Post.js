import React from 'react';
import { decode } from 'he';
import { sanitize } from 'dompurify';

import './Post.css';

export const Post = (props) => {
  const post = props.post;
  const isLong = post.title.length > 125;
  
  let body;
  if (post.selftext_html) {
    const decodedSelftextHtml = decode(post.selftext_html);
    body = sanitize(decodedSelftextHtml);
  }

  return (
    <article className='post'>
      <div className='post-title'>
        {isLong ? <h2>{post.title.substring(0, 125)}...</h2> : <h2>{post.title}</h2>}
      </div>
      <div className='post-content'>
        {Boolean(body) ? <div className='post-body' dangerouslySetInnerHTML={{__html: body}}></div> : (Boolean(post.thumbnail) && <img src={post.thumbnail} alt='' />)}
      </div>
      <div className='post-link'>
        <a href={post.url} target='_blank' rel='noreferrer'>Full Story</a>
      </div>
    </article>
  );
}