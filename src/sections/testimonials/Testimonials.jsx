import React from 'react'
import styles from '../testimonials/Testimonials.module.css';
import ellipse from "../../assets/testimonials/Ellipse.svg";
import u1 from "../../assets/testimonials/u1.png";
import u2 from "../../assets/testimonials/u2.png";
import u3 from "../../assets/testimonials/u3.png";
import Testimonialcard from '../../components/testimonialcard/Testimonialcard';


const Testimonials = () => {

    const cards = [{
        id: 1,
        user: u1,
        username: "Ananya S.",
        userdesc: "GATE Life Sciences Student",
        review: "IFAS provided a thorough and interactive learning experience. Thestructured study plans and regular practice tests boosted my confidence, helping me understand complex topics and excel in my exams.I highly recommend IFAS for anyone serious about their career"
    },
   
    {
        id : 2,
        user:u2,
        username:"Ravi K.",
        userdesc:"CSIR NET Life Sciences Student",
        review:"IFAS made my preparation journey smoother and more effective. The instructors are knowledgeable, and the regular assessments kept me on track. I gained a deeper understanding of the subject and felt more confident during my exams."
    },
     {
        id : 3,
        user:u3,
        username:"Neha R.",
        userdesc:"IIT JAM Biotechnology Student",
        review:"The personalized support at IFAS was exceptional. I received clear explanations of tough concepts and felt well-prepared for the exam. The interactive format made learning enjoyable and productive."
    }

    ]


    return (
        <div className={styles.main}>
            <div className={styles.ellipse}>
                <img src={ellipse} alt="" className={styles.ellip} />
            </div>
            <div className={styles.top}>
                <h3>Testimonials</h3>
                <p>What our student say about us</p>
            </div>
            <div className={styles.bottom}>
                {cards.map(items=>{
                    return <Testimonialcard
                        key={items.id}
                        user={items.user}
                        username={items.username}
                        userdesc={items.userdesc}
                        review={items.review}
                    />
                })}
            </div>
        </div>
    )
}

export default Testimonials