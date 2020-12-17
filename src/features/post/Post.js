import React from 'react';
import { decode } from 'he';
import { sanitize } from 'dompurify';

export const Post = (props) => {
  const post = props.post;
  
  let body;
  if (post.selftext_html) {
    const decodedSelftextHtml = decode(post.selftext_html);
    body = sanitize(decodedSelftextHtml);
  }

  return (
    <article>
      <h2>{post.title}</h2>
      {Boolean(body) ? <div dangerouslySetInnerHTML={{__html: body}}></div> : (Boolean(post.thumbnail) && <img src={post.thumbnail} alt='' />)}
      <a href={post.url} target='_blank' rel='noreferrer'>Full Story at {post.domain}</a>
    </article>
  );
}