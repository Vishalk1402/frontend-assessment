import React from 'react'
import styles from "../whylearn/Whylearn.module.css";
import illustration from "../../assets/whylearn/illustration.png";
import illustration2 from "../../assets/whylearn/illustration2.png";
import illustration3 from "../../assets/whylearn/illustration3.png";
import style from "../../assets/hero/style1.png";
const Whylearn = () => {
    return (
        <div className={styles.main}>
        
            <div className={styles.primary}>
            <img src={style} alt="" className={styles.style}/>
                <h2>Why <span className={styles.highlight}>learn</span> with our courses?</h2>
                <p className={styles.p0}>Join millions of learners and experience top-notch education with expert instructors and real-time learning.</p>
            </div>
            <div className={styles.secondary}>
                <div className={styles.card}>
                    <img src={illustration} alt="100+ Top courses" className={styles.img} />
                    <div className={styles.para}>
                        <p className={styles.p1}>100+</p>
                        <p className={styles.p2}>Top <br />Courses</p>
                        <p className={styles.p3}>Take courses from the world’s best instructors and universities. </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={illustration2} alt="Happy Learners" className={styles.img} />
                    <div className={styles.para}>
                        <p className={styles.p1}>10 M+</p>
                        <p className={styles.p2}>Happy <br /> Learners</p>
                        <p className={styles.p3}>Learners from all around the world. </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={illustration3} alt="100+ Top courses" className={styles.img} />
                    <div className={styles.para}>
                        <p className={styles.p1}>507M+ Hrs</p>
                        <p className={styles.p2}>Live <br />Learning</p>
                        <p className={styles.p3}>Learn your favorite course live with world-class instructors in real-time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whylearn