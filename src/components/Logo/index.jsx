import { BiDrink } from "react-icons/bi";
import { NavLink } from 'react-router-dom'
import styles from './logo.module.css'


const Logo = () => {
  return (
    <NavLink className={styles.logo} to="/">
      <BiDrink />
    </NavLink>
  )
}

export default Logo