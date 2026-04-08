import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5";
import styles from './navbar.module.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className={styles.hamburger} onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <IoClose /> : <GiHamburgerMenu />}
      </div>
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