import styles from './header.module.css'
import Navbar from '../Navbar'
import Logo from '../Logo'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <Logo />
        <Navbar />
      </div>
    </div>
  )
}

export default Header