import React from 'react';
import Post from './Post';
import post1 from '../posts/post1.md';
import post2 from '../posts/post2.md';
import post3 from '../posts/post3.md';

const posts = [post1, post2, post3];

const Blog = () => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Blog;
