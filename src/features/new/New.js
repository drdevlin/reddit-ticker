import React from 'react';

export const New = (props) => {
  const isLong = props.title.length > 70;
  const shortenedTitle = props.title.substring(0, 70);
  return (
    <article>
      {isLong ? <p>{shortenedTitle}...</p> : <p>{props.title}</p>}
    </article>
  );
}