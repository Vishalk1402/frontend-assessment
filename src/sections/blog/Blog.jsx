import React from 'react'
import styles from "../blog/Blog.module.css";

import img1 from "../../assets/blog/img1.jpg";
import img2 from "../../assets/blog/img2.jpg";
import img3 from "../../assets/blog/img3.jpg";
import Blogcard from '../../components/blogcard/Blogcard';

const Blog = () => {
    const card = [
        {
            id: 1,
            img: img1,
            title: "Ujjwal Tripathy / 26 December 2024,",
            time: "8 Min",
            desc: "UGC NET Exam Pattern 2024: Paper 1 and 2 Marking Scheme and Key Instructions"
        },
        {
            id: 2,
            img: img2,
            title: "Siddharth gangwar / 24 December 2024,",
            time: "9 Min",
            desc: "JEST Application Form 2025, Application Fee, Apply Online Link"
        },
        {
            id: 3,
            img: img3,
            title: "Ujjwal Tripathy / 22 December 2024,",
            time: "10 Min",
            desc: "UGC NET 2025: Notification, Application Form, Exam Dates, Eligibility, Pattern & Syllabus"
        }

    ]
    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <h3>Latest <span>Blogs</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</p>
            </div>
            <div className={styles.bottom}>
                {
                    card.map(items => {
                        return <Blogcard
                            id={items.id}
                            img={items.img}
                            title={items.title}
                            time={items.time}
                            desc={items.desc}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Blog