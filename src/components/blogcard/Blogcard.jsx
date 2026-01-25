import React from 'react'
import styles from "../blogcard/Blogcard.module.css"


const Blogcard = ({ img, title, time, desc }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={img} alt="Exam Illustration" />
            </div>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <span>{title}</span>
                    <span>{time}</span>
                </div>
                <h3 className={styles.title}>
                    {desc}
                </h3>
            </div>
        </div>
    )
}

export default Blogcard