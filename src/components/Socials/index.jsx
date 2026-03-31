import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from './socials.module.css'

const Socials = () => {
  return (
    <div className={styles.socials}>
      <FaInstagram />
      <FaFacebookF />
      <FaXTwitter />
    </div>
  )
}

export default Socials