/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';

const Cards = props => {

    return (
        <article class="d-flex flex-column justify-content-start text-center" style={styles.card}>
            <section class='' style={styles.cardImg}>
                <img style={styles.img} src={props.img} alt='Photo placeholder' />   
            </section>
            <section class="d-flex flex-column justify-content-end align-items-center" style={styles.cardInfo}>
                <div>  
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
        width: '100%',
        height: '400px',
        flexShrink: '1',
        padding: '0',
        borderRadius: '4%',
        backgroundColor: 'rgba(185, 177, 163, .50)',
        boxShadow: '0px 0px 10px rgba(45, 44, 39, 0.5)'
    },
    cardImg: {
        width: '100%',
        height: '50%'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: '4%'
    },
    cardInfo: {
        padding: '3%',
        margin: '8% 0'
    },
    link: {
        color: '#8B8E51',
        textDecoration: 'none',
        fontVariant: 'small-caps'
    }
    
}