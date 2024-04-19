import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Cards from "../components/Cards";
import cardOne from '../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import cardTwo from '../images/shubham-dhage-jwu8TzngxqY-unsplash.jpg';
import cardThree from '../images/rubaitul-azad-HSACbYjZsqQ-unsplash.jpg';
import cardFour from '../images/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg';


function Articles() {
    return (
        <section class="" style={styles.container}>
            <Header 
                welcome='The Archives'
                title="Blog"
                desc="Dive into the forefront of innovation, unraveling the mysteries of code, hardware, software, and everything in between. Get ready to embark on an exhilarating adventure where the possibilities are limitless, and the future is just a click away!"
                img={cardTwo}
            />
            <section>
                <Blog />
            </section>
            <section class="d-flex flex-row justify-content-between align-items-center flex-wrap" style={styles.articles}>
                <Link to='/blog/post1' style={styles.link}>
                    <Cards 
                        img={cardOne} 
                        desc="Unveiling the Advantages of Client-Side Rendering: Elevating the User Experience"
                    />
                </Link>
                <Link to='/blog/post2' style={styles.link}>
                    <Cards 
                        img={cardThree}
                        desc="Demystifying Docker: A Comprehensive Guide to Understand Containerization"
                    />
                </Link>
                <Link to='/blog/post3' style={styles.link}>
                    <Cards 
                        img={cardTwo}
                        desc="Navigating the Future: Exploring the World of Web3"
                    />
                </Link>
                <Link to='/blog/post4' style={styles.link}>
                    <Cards 
                        img={cardFour}
                        desc=" Unveiling the Advantages of React: Why It's a Game-Changer in Web Development"
                    />
                </Link>
            </section>
        </section>
    );
}

export default Articles;

const styles = {
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
