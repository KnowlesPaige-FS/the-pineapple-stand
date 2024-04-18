/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import header from '../images/kalei-de-leon-MyzKYhcHkmg-unsplash.jpg';

const Header = props => {
    return (
        <header style={styles.header}>
            <div class="" style={styles.colorBlock}></div>
            <section class="d-flex flex-row justify-content-between align-items-end" style={styles.mainSection}>
                <div class="d-flex flex-column" style={styles.mainContent}>
                    <h4 style={styles.h4}>{props.welcome}</h4>
                    <h1 style={styles.h1}>{props.title}</h1>
                    <p style={styles.p}>{props.desc}</p>
                </div>
                <div style={styles.headerImg}>
                    <img style={styles.img} src={header} alt='Photo placeholder' />   
                </div>    
            </section>
        </header>
    )
}

export default Header;

const styles = {
    header: {
        margin: '0 2%',
        padding: '1%',
        // height: '650px'
        height: '70vh'
    },
    colorBlock: {
        position: 'absolute',
        zIndex: '-1',
        right: '0',
        top: '0',
        background: 'rgb(197, 92, 30)',
        width: '35%',
        height: '85%',
    },
    mainContent: {
        width: '50%'
    },
    h4: {
        fontVariant: 'small-caps'
    },
    h1: {
        margin: '1.5% 0'
    },
    headerImg: {
        width: '40%'
    },
    img: {
        width: '80%',
        boxShadow: '0px 0px 10px rgba(45, 44, 39, 0.5)'
    }
    
}