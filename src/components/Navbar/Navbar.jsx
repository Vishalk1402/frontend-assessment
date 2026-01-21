import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="IFAS Logo" />
      </div>

     
      <nav className={`${styles.nav} ${open ? styles.show : ""}`}>
        <a href="#" className={styles.home}>Home ▾</a>
        <a href="#">Courses ▾</a>
        <a href="#">About Us</a>
        <a href="#">FAQ</a>
        <a href="#">Contact Us</a>
        <a href="#">Signup</a>

       

       
      </nav>

 
      <div className={styles.actions}>
        <FiShoppingCart />
        <CgProfile />
        <FiSearch />
      </div>

      <button className={styles.signup}>Signup</button>

   
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </div>
    </header>
  );
};

export default Navbar;
