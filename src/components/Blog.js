import React, { useState, useEffect } from 'react';
import Post from './Post';
import post1 from '../posts/post1.md';
import post2 from '../posts/post2.md';
import post3 from '../posts/post3.md';
import post4 from '../posts/post4.md';
import matter from 'gray-matter';

const posts = [post1, post2, post3, post4];

const Blog = () => {
  const [postContents, setPostContents] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postContents = await Promise.all(posts.map(async (post) => {
          const res = await import(`../posts/${post}`);
          const data = await fetch(res.default);
          return await data.text();
        }));
        setPostContents(postContents);
      } catch (error) {
        console.error('Error fetching Markdown files:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {postContents.map((content, index) => {
        try {
          const { data: frontmatter, content: markdownContent } = matter(content);
          const postObject = {
            title: frontmatter.title || 'Untitled',
            date: frontmatter.date || 'Unknown',
            content: markdownContent || 'No content available',
          };
          return <Post key={index} post={postObject} />;
        } catch (error) {
          console.error('Error parsing Markdown file:', error);
          return null;
        }
      })}
    </div>
  );
};

export default Blog;
