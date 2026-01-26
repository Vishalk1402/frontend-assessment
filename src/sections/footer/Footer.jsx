import React from 'react'
import styles from "../footer/Footer.module.css";
import logo from "../../assets/footer/logo.svg";
import appStore from "../../assets/footer/appstore.svg";
import playStore from "../../assets/footer/playstore.svg";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiTwitter, CiMail, CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <div className={styles.brand}>
                        <img src={logo} alt="IFAS" />

                    </div>
                    <p className={styles.desc}>
                        Let’s grow up your education level up. We are here to help you keep
                        focus when studying.
                    </p>
                    <h4>Download App Now</h4>
                    <div className={styles.apps}>
                        <img src={appStore} alt="App Store" className={styles.stores} />
                        <img src={playStore} alt="Google Play" />
                    </div>
                </div>
                <div className={styles.links}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li>About</li>
                        <li>Course</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h4>Contact us</h4>
                    <p><span><IoCallOutline /></span> +91-9172266888</p>
                    <p><span><CiMail /></span> info@upmail.com</p>
                    <div className={styles.address}>
                        <span><CiLocationOn /></span><p> ISH Infotech, Phase 1, Hinjewadi, Pune, Maharashtra – 411057</p>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>Copyright © 2023 | All Rights Reserved</p>


                <div className={styles.socials}>
                    <span><CiFacebook /></span>
                    <span><CiTwitter /></span>
                    <span><FaInstagram /></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer