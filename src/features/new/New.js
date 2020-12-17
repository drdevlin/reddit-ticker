import React from 'react';

export const New = (props) => {
  const shortenedTitle = props.title.substring(0, 50);
  return (
    <article>
      <h2>{shortenedTitle}...</h2>
    </article>
  );
}