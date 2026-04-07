import { NavLink } from 'react-router-dom'
import { getImageUrl } from '../../utils/functions.js'
import navCard from '../../data/data.js'
import styles from './home.module.css'

const Home = ({ pageTitle, subtitle, info }) => {
  return (
    <>
      <div className={styles.home}>
        <h2 className={styles.pageTitle}>{pageTitle}</h2>
        <p className={styles.pageInfo}>{subtitle}</p>
        <p className={styles.text}>{info}</p>
      </div>
      <div className={styles.navcards}>
        {navCard.map((card) => (
          <NavLink key={card.id} className={styles[card.classname]} to={card.to}>
            <img src={getImageUrl(card.image)} alt="image" height="300px" width="auto" />
            <h2 className={styles.title}>{card.title}</h2>
            <p className={styles.info}>{card.info}</p>
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default Home 