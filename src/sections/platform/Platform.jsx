import React from 'react'
import styles from "../platform/Platform.module.css"
import u1 from "../../assets/platform/u1.jpg"
import u2 from "../../assets/platform/u2.png"
import u3 from "../../assets/platform/u3.png"
import u4 from "../../assets/platform/u4.png"
import u5 from "../../assets/platform/u5.png"

import Ellipse1 from "../../assets/platform/Ellipse1.svg";
import Ellipse2 from "../../assets/platform/Ellipse2.svg";
import Ellipse3 from "../../assets/platform/Ellipse3.svg";
import polygon from "../../assets/platform/Polygon.svg";
import hand from "../../assets/platform/hand.svg";


import dot1 from "../../assets/platform/dot1.svg";
import dot2 from "../../assets/platform/dot2.svg";
import dot3 from "../../assets/platform/dot3.svg";


import { BsBarChartFill } from "react-icons/bs";

const Platform = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <img src={hand} alt="" className={styles.hand} />
        <img src={Ellipse1} alt="" className={styles.ellipse1} />
        <img src={Ellipse2} alt="" className={styles.ellipse2} />
        <img src={Ellipse3} alt="" className={styles.ellipse3} />
        <div className={styles.card}>
          <div className={styles.top}>
            <div className={styles.dot}>
              <img src={dot1} alt="" />
              <img src={dot2} alt="" />
              <img src={dot3} alt="" />
            </div>
            <div className={styles.users}>
              <div className={styles.user1}>
                <img src={u1} alt="" />
                <div className={styles.desc}>
                  <BsBarChartFill className={styles.icon} />
                  <span className={styles.role}>Instructor</span>
                  <span className={styles.name}>Eveny Howard</span>
                </div>
                <div className={styles.btn}>
                  <button className={styles.btn1}>Present</button>
                  <button className={styles.btn2}>Call</button>
                </div>
              </div>
              <div className={styles.user2}>
                <div>
                  <img src={u2} alt="" />
                  <div className={styles.desc2}>
                    <BsBarChartFill className={styles.icon} />
                    <span className={styles.name}>Eveny Howard</span>
                  </div>
                </div>
                <div>
                  <img src={u3} alt="" className={styles.u3} />
                  <div className={styles.desc3}>
                    <BsBarChartFill className={styles.icon} />
                    <span className={styles.name}>Eveny Howard</span>
                  </div>
                </div>
              </div>
              <div className={styles.user3}>
                <div>
                  <img src={u4} alt="" className={styles.u4} />
                  <div className={styles.desc4}>
                    <BsBarChartFill className={styles.icon} />
                    <span className={styles.name}>Adam Levin</span>
                  </div>
                </div>

                <div>
                  <img src={u5} alt="" className={styles.u5} />
                  <div className={styles.desc5}>
                    <BsBarChartFill className={styles.icon} />
                    <span className={styles.name}>Patricia Mendoza</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <img src={polygon} alt="" className={styles.polygon} />
        <h3>
          Platform <span>Features</span> That <br /> Empower Your Learning
        </h3>

        <ul>
          <li>Live learning and interactive tools</li>
          <li>Mobile-friendly access</li>
          <li>On-demand content</li>
          <li>Personalized learning paths</li>
        </ul>
      </div>
    </section>
  )
}

export default Platform