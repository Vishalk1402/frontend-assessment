import React from 'react'
import styles from "../card/Card.module.css"

const Card = ({ icon, title, description }) => {
  return (
     <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={title} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default Card