import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import matter from 'gray-matter';

const SinglePost = ({ postFile }) => {
  const [postContent, setPostContent] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(postFile);
        const { data: frontmatter, content: markdownContent } = matter(data);
        const postObject = {
          title: frontmatter.title || 'Untitled',
          date: frontmatter.date || 'Unknown',
          content: markdownContent || 'No content available',
        };
        setPostContent(postObject);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postFile]);

  return (
    <div>
      {postContent && <Post post={postContent} />}
    </div>
  );
};

export default SinglePost;
