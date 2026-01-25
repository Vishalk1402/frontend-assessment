import React from 'react'
import styles from "../testimonialcard/Testimonialcard.module.css";

const Testimonialcard = ({ user, username, userdesc, review }) => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.profile}>
                    <img
                        src={user}
                        alt="Profile"
                    />
                    <div>
                        <h3>{username}</h3>
                        <p>{userdesc}</p>
                    </div>
                </div>


                <div className={styles.review}>
                    {review}
                </div>


                <div className={styles.stars}>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={`${styles.star} ${styles.inactive}`}>★</span>
                </div>
            </div>


        </div>
    )
}

export default Testimonialcard