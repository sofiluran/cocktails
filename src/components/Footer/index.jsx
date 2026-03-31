import styles from './footer.module.css'
import Socials from '../Socials'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>&copy; The Drink Route</div>
      <div className={styles.text}>123 Demo Street</div>
      <div className={styles.info}>stockholm</div>
      <Socials className={styles.socials}/>
    </div>
  )
}

export default Footer 