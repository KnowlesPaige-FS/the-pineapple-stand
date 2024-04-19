/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import cardOne from '../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import cardTwo from '../images/shubham-dhage-jwu8TzngxqY-unsplash.jpg';
import cardThree from '../images/rubaitul-azad-HSACbYjZsqQ-unsplash.jpg';
import about from '../images/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg';
import header from '../images/kalei-de-leon-MyzKYhcHkmg-unsplash.jpg';

function Home() {
    return (
        <section style={styles.container}>
            <Header 
                welcome='Welcome to'
                title='The Pineapple Stand'
                desc="A gateway to the ever-evolving world of technology, curated by passionate tech enthusiasts. At The Pineapple Stand, we're dedicated to unraveling the complexities of the digital realm and making technology accessible to all. Whether you're a seasoned developer, an aspiring entrepreneur, or simply intrigued by the latest innovations, our blog serves as your trusted companion on the journey through the digital landscape. From in-depth tutorials and insightful analyses to cutting-edge trends and product reviews, we're here to empower you with the knowledge and tools to navigate the fast-paced world of tech confidently. Join us as we dive into the forefront of innovation, unraveling the mysteries of code, hardware, software, and everything in between. Get ready to embark on an exhilarating adventure where the possibilities are limitless, and the future is just a click away!"
                img={header}
            />
            <section style={styles.articles}>
                <h3 style={styles.h2}>Latest Articles</h3>
                <section class="d-flex flex-row justify-content-between">
                <Link to='/articles' style={styles.link}>
                    <Cards 
                        img={cardOne} 
                        desc="Unveiling the Advantages of Client-Side Rendering: Elevating the User Experience"
                    />
                </Link>
                <Link to='/postthree' style={styles.link}>
                    <Cards 
                        img={cardThree}
                        desc="Demystifying Docker: A Comprehensive Guide to Understand Containerization"
                    />
                </Link>
                <Link to='/posttwo' style={styles.link}>
                    <Cards 
                        img={cardTwo}
                        desc="Navigating the Future: Exploring the World of Web3"
                    />
                </Link>
                </section>
               
            </section>
        
            <section class="d-flex flex-row justify-content-between align-items-center" style={styles.about}>
                <div style={styles.imgContainer}>
                    <img style={styles.img} src={about} alt='Photo placeholder' />   
                </div>
                <div style={styles.aboutDesc}>
                    <p style={styles.p}>Meet Paige Knowles, the visionary mind driving The Pineapple Stand’s exploration into the digital frontier. With a background steeped in technology and a relentless curiosity for innovation, Paige is at the helm of this tech journey. Their expertise spans from software development to emerging technologies, cultivated through years of hands-on experience and a passion for staying ahead of the curve. She is dedicated to bridging the gap between complex tech concepts and everyday users, offering insightful analyses, practical tutorials, and thought-provoking insights. Through The Pineapple Stand, I invite readers to embark on a transformative voyage through the ever-evolving world of technology, empowering them to harness its full potential and shape the future.</p>
                </div>
            </section>
        </section>
    );
}

export default Home;

const styles = {
    articles: {
        margin: '4% 0 0',
        padding: '2% 1%',
        textAlign: 'center',
        backgroundColor: 'rgba(98, 97, 66, 0.2)'
    },
    imgContainer: {
        width: '40%'
    },
    img: {
        width: '100%'
    },
    aboutDesc: {
        width: '38%',
        margin: '0 8% 0 0'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        width: '25%',
        height: '400px',
        flexShrink: '1',
        margin: '2% 1%',
    }
}