import React from 'react';

function Article({ title, date, content }) {
  return (
    <article>
      <h3>{title}</h3>
      <p><em>{date}</em></p>
      <p>{content}</p>
    </article>
  );
}

export default Article;
