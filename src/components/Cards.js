/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';

const Cards = props => {

    return (
        <article class="d-flex flex-column justify-content-between text-center" style={styles.card}>
            <section>
                <img style={styles.img} alt='Photo placeholder' />   
            </section>
            <section class="d-flex flex-row justify-content-between align-items-center">
                <div class="d-flex flex-row justify-content-around align-items-end">  
                    <p style={styles.desc}>{props.desc}</p>
                </div>
                <Link to="/" style={styles.link}>Read More</Link>
            </section>
        </article>
    );
}

export default Cards;

const styles = {
    card: {
        width: '33%',
        height: '220px',
        flexShrink: '1',
        margin: '2% 1%',
        padding: '1% 2%',
        borderRadius: '4%',
        background: '#B9B1A3'
    },
    img: {
        
    },
    desc: {
        
    },
    link: {
        color: '#E1A758',
        textDecoration: 'none',
        fontSize: '1.2em',
        fontWeight: '600'
    }
    
}