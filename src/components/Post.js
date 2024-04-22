import React from 'react';
import Markdown from 'react-markdown';


const Post = ({ post }) => {
  const { title, date, content } = post;

  console.log('Content:', content);
  console.log('Post:', post);

  return (
    <div>
      <h2>{title || 'Untitled'}</h2>
      <p>{date || 'Unknown'}</p>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default Post;