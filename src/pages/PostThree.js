import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/Header";
import Post from "../components/Post";
import Cards from "../components/Cards";
import post3 from '../posts/2024-03-14.md';
import matter from 'gray-matter';
import cardOne from '../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import cardTwo from '../images/shubham-dhage-jwu8TzngxqY-unsplash.jpg';
import cardThree from '../images/rubaitul-azad-HSACbYjZsqQ-unsplash.jpg';
import cardFour from '../images/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg';

const latestPost = post3; 

const PostThree = () => {
  const [latestPostContent, setLatestPostContent] = useState(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const { data } = await axios.get(latestPost);
        const { data: frontmatter, content: markdownContent } = matter(data);
        const postObject = {
          title: frontmatter.title || 'Untitled',
          date: frontmatter.date || 'Unknown',
          content: markdownContent || 'No content available',
        };
        setLatestPostContent(postObject);
      } catch (error) {
        console.error('Error fetching latest post:', error);
      }
    };

    fetchLatestPost();
  }, []);

  return (
    <section>
      <Header 
        welcome='The Archives'
        title="Blog"
        desc="Dive into the forefront of innovation, unraveling the mysteries of code, hardware, software, and everything in between. Get ready to embark on an exhilarating adventure where the possibilities are limitless, and the future is just a click away!"
        img={cardTwo}
      />
      <section style={styles.posts}>
        {latestPostContent && <Post post={latestPostContent} />}
      </section>
      <section className="d-flex flex-row justify-content-between align-items-center flex-wrap" style={styles.articles}>
        <Link to='/postone' style={styles.link}>
            <Cards 
                img={cardOne} 
                desc="Unveiling the Advantages of Client-Side Rendering: Elevating the User Experience"
            />
        </Link>
        <Link to='/posttwo' style={styles.link}>
            <Cards 
                img={cardThree}
                desc="Demystifying Docker: A Comprehensive Guide to Understand Containerization"
            />
        </Link>
        <Link to='/postthree' style={styles.link}>
            <Cards 
                img={cardTwo}
                desc="Navigating the Future: Exploring the World of Web3"
            />
        </Link>
        <Link to='/articles' style={styles.link}>
            <Cards 
                img={cardFour}
                desc=" Unveiling the Advantages of React: Why It's a Game-Changer in Web Development"
            />
        </Link> 
      </section>
    </section>
  );
}

export default PostThree;

const styles = {
    posts:{
        margin: '2%',
        padding: '2% 1%',
        width: '85%'
    },
    articles: {
        margin: '4% 0 0',
        padding: '2% 1%',
        textAlign: 'center',
        backgroundColor: 'rgba(98, 97, 66, 0.2)'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        width: '25%',
        height: '400px',
        flexShrink: '1',
        margin: '2% 1%',
    }
};