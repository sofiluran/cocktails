import styles from './footer.module.css'
import Socials from '../Socials'

const Footer = () => {
  return (
    <div className={styles.footer}>
      &copy; The Drink Route
      <Socials />
    </div>
  )
}

export default Footer 