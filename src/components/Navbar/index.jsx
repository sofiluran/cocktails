import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

import styles from './navbar.module.css'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} className={styles.hamburger} />

      <nav className={`${styles.navbar} ${showMenu ? styles.active : ""}`}>

        <NavLink className={styles.navItem} to="/">Home</NavLink>
        <NavLink className={styles.navItem} to="/categories">Categories</NavLink>
        <NavLink className={styles.navItem} to="/nonalcoholic">Non Alcoholic</NavLink>
        <NavLink className={styles.navItem} to="/random">Random</NavLink>
 </nav>
    </>
  )
}

export default Navbar