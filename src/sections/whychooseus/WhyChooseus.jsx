import React from 'react'
import styles from "../whychooseus/Whychooseus.module.css";
import Card from '../../components/card/Card';
import icon1 from "../../assets/whychooseus/icon1.png";
import icon2 from "../../assets/whychooseus/icon2.png";
import icon3 from "../../assets/whychooseus/icon3.png";
import icon4 from "../../assets/whychooseus/icon4.png";
import icon5 from "../../assets/whychooseus/icon5.png";

const WhyChooseus = () => {
    const data = [
        {
            id: 1,
            icon:  icon1,
            title: "Expert Instructors",
            description: "Learn from top educators with years of experience in entrance exam coaching."
        },
        {
            id: 2,
            icon: icon2,
            title: "Study Material",
            description: "Access meticulously curated content that covers all aspects of your syllabus."
        },
        {
            id: 3,
            icon: icon3,
            title: "Live Classes",
            description: "Participate in real-time classes where you can ask doubts and engage with peers"
        },
         {
            id: 4,
            icon: icon4,
            title: "Flexible Learning",
            description: "Study at your own pace with our recorded sessions and mobile-friendly platform."
        },
         {
            id: 5,
            icon: icon5,
            title: "Affordable Pricing",
            description: "Get quality education at competitive prices with various subscription plans"
        }
    ];

    return (
        <div className={styles.container}>
            <div style={styles.desc}>
                <h2>Why Choose <span className={styles.span}>IFAS</span> Online?</h2>
                <p>12,000+ unique online course list designs</p>
            </div>
            <div className={styles.cards}>
                {data.map(item => (
                    <Card
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}

            </div>
        </div>
    )
}

export default WhyChooseus