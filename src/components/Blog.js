import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import post1 from '../posts/2024-01-14.md';
import post2 from '../posts/2024-02-14.md';
import post3 from '../posts/2024-03-14.md';
import post4 from '../posts/2024-04-14.md';
import post5 from '../posts/2024-04-20.md';
import matter from 'gray-matter';

const postFiles = [post1, post2, post3, post4, post5];

const Blog = () => {
  const [postContents, setPostContents] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postContents = await Promise.all(postFiles.map(async (post) => {
          const { data } = await axios.get(post); 
          return data;
        }));
        console.log(postContents); 
        setPostContents(postContents);
      } catch (error) {
        console.error('Error fetching Markdown files:', error);
      }
    };
  
    fetchPosts();
  }, []);
  

  return (
    <div style={styles.blog}>
      {postContents.map((content, index) => {
        try {
          const { data: frontmatter, content: markdownContent } = matter(content);
          console.log(frontmatter); 
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


const styles = {
  blog: {
    margin: '2%',
    padding: '2% 1%',
    width: '85%'
  }
}