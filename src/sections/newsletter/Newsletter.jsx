import React from 'react'
import styles from "../newsletter/Newsletter.module.css";
import bg from "../../assets/newsletter/news.png"

const Newsletter = () => {
    return (
        <div
            className={styles.wrapper}
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <h3>Subscribe to our newsletter</h3>
                <p>
                    Subscribe today to unlock a wealth of knowledge, delivered right to
                    your email, and stay ahead of the curve with ease.
                </p>
                <div className={styles.form}>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter