/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import { Link } from "react-router-dom";

const Header = props => {
    return (
        <header>
            <section>
                <div>
                    <h4 style={styles.h4}>{props.welcome}</h4>
                    <h2 style={styles.h2}>{props.title}</h2>
                    <p style={styles.p}>{props.desc}</p>
                </div>
                <div>
                    <img style={styles.img} alt='Photo placeholder' />   
                </div>
                
            </section>

            <section class="d-flex flex-column justify-content-around align-items-center" style={styles.mainSection}>

            </section>
        </header>
    )
}

export default Header;

const styles = {
    h4: {

    },
    mainSection: {

    }
}