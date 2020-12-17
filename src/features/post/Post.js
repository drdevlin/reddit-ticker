import React from 'react';
import { decode } from 'he';
import DOMPurify from 'dompurify';

export const Post = (props) => {
  const post = props.post;
  const decodedSelftextHtml = decode(post.selftext_html);
  const body = DOMPurify.sanitize(decodedSelftextHtml);
  
  return (
    <article>
      <h2>{post.title}</h2>
      {Boolean(body) && <div dangerouslySetInnerHTML={{__html: body}}></div>}
    </article>
  );
}