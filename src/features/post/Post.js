import React from 'react';
import { decode } from 'he';
import { sanitize } from 'dompurify';

export const Post = (props) => {
  const post = props.post;
  const decodedSelftextHtml = decode(post.selftext_html);
  const body = sanitize(decodedSelftextHtml);

  return (
    <article>
      <h2>{post.title}</h2>
      {Boolean(body) && <div dangerouslySetInnerHTML={{__html: body}}></div>}
    </article>
  );
}