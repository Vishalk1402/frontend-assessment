import React from 'react'
import styles from "../featurecard/Featurecard.module.css";

const Featurecard = ({icon,title,subtitle}) => {
    return (

        <div className={styles.card}>
            <div className={styles.iconBox}>
                <img src={icon} alt="CSIR NET" />
            </div>

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>

    )
}

export default Featurecard