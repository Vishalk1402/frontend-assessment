import React from 'react'
import styles from "../platform/Platform.module.css"
import u1 from "../../assets/platform/u1.jpg"
import u2 from "../../assets/platform/u2.png"
import u3 from "../../assets/platform/u3.png"
import u4 from "../../assets/platform/u4.png"
import u5 from "../../assets/platform/u5.png"

import Ellipse1 from "../../assets/platform/Ellipse1.svg";
import Ellipse2 from "../../assets/platform/Ellipse2.svg";
import polygon from "../../assets/platform/Polygon.svg";

import network from "../../assets/platform/network.svg";

const Platform = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <img src={Ellipse1} className={styles.purple} alt="" />
        <img src={Ellipse2} className={styles.blue} alt="" />
        <img src={polygon} className={styles.triangle} alt="" />

        <div className={styles.card}>
          <div className={styles.card1}>
            <div className={styles.first}>
                <img src={u1} alt="" className={styles.u1} />
              <div className={styles.u1name}>
                <img src={network} alt="" />
                <span className={styles.tag}>Instructor</span>
                <p>Eveny Howard</p>
              </div>
            </div>

            <div className={styles.second}>
              <div className={styles.small}><img src={u2} alt="" /><p>Tamara Clarke</p></div>
              <div className={styles.small}><img src={u3} alt="" /><p>Adam Levin</p></div>
            </div>
            <div className={styles.third}>
              <div className={styles.small}><img src={u4} alt="" /><p>Humbert Holland</p></div>
              <div className={styles.small}><img src={u5} alt="" /><p>Patricia Mendoza</p></div>
            </div>
          </div>

          <div className={styles.buttons}>
            <button className={styles.present}>Present</button>
            <button className={styles.call}>Call</button>
          </div>
        </div>

      </div>

      <div className={styles.right}>
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