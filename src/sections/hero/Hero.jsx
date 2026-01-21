import React from "react";
import styles from "./Hero.module.css";
import leftellipse from "../../assets/leftEllipse.png";
import boy from "../../assets/boy.png";
import center from "../../assets/center.png";
import style1 from "../../assets/style1.png"

const Hero = () => {
    return (
        <section className={styles.hero}>

            <img src={leftellipse} alt="" className={styles.ellipse} />


            <div className={styles.left}>
                <h1>
                    Achieve Success <br />
                    with <span>India’s No.1</span> <br />
                    Online Exam <br />Institute
                </h1>

                <p className={styles.description}>
                    Join thousands of successful students who have cracked their entrance
                    exams with our expert-led online courses.
                </p>

                <div className={styles.buttons}>
                    <button className={styles.btn1}>Explore Courses</button>
                    <button className={styles.btn2}>Start Learning for Free</button>
                </div>
            </div>

            <div className={styles.center}>
                <img src={style1} alt="style" className={styles.sty1} />
            </div>

            <div className={styles.right}>
                
                   <div className={styles.card1}>
                   <img src={center} alt="strip" />
                    <div className={styles.text}>
                        <h4>Dadasaheb Sondge</h4>
                    <p>
                        Led by CEO Dadasaheb Sondge, IFAS Publications delivers quality
                        educational materials, empowering students and educators to shape
                        future leaders through innovation.
                    </p>
                     <div className={styles.stars}>★★★★★</div>
                    </div>
                    </div>
                   
                      <div className={styles.img}>
    
                    <img src={boy} alt="Student" className={styles.boy} />
                
                </div>
              
            </div>
        </section>
    );
};

export default Hero;
