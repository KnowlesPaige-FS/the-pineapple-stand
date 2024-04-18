import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={styles.nav} class="d-flex flex-row justify-content-between">
        <h3 style={styles.h3}><Link to="/" style={styles.link}>The Pineapple Stand</Link></h3>
        <div>
            <ul style={styles.ul} class="d-flex flex-row justify-content-between">
            <li style={styles.li}> 
                <Link to="/about" style={styles.link}>About</Link>
            </li>
            <li style={styles.li}>
                <Link to="/articles" style={styles.link}>Articles</Link>
            </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navigation;

const styles = {
    nav: {
        width: '95%',
        margin: '0 2%',
        padding: '1%'
    },
    h3: {
        color: '#626142'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    ul: {
        listStyleType: 'none',
    },
    li: {
        color: '#8B8E51',
        margin: '0 6%'
    }
}