import { NavLink } from 'react-router-dom'
import styles from './home.module.css'
import categoryImg from '../../assets/images/cocktail.jpg'
import nonalcoholicImg from '../../assets/images/nonalcoholic.jpg'
import randomImg from '../../assets/images/warm.jpg'

const Home = ({pageTitle, subtitle, info}) => {
  return (
    <>
      <div className={styles.home}>
        <h2 className={styles.pageTitle}>{pageTitle}</h2>
        <p className={styles.pageInfo}>{subtitle}</p>
        <p className={styles.text}>{info}</p>
      </div>
      <div className={styles.navcards}>
        <NavLink className={styles.navitem} to="/categories">
          <img src={categoryImg} alt="Category" height="300px" width="auto" />
          <h2 className={styles.title}>Categories</h2>
          <p className={styles.info}>Explore All Drink Categories</p>
        </NavLink>
        <NavLink className={styles.nonAlco} to="/nonalcoholic">
          <img src={nonalcoholicImg} alt="nonalcoholic" height="300px" width="auto"/>
          <h2 className={styles.title}>Non Alcoholic</h2>
          <p className={styles.info}>Delicious non-alcoholic options for any occasion.</p>
        </NavLink>
        <NavLink className={styles.navitem} to="/random">
          <img src={randomImg} alt="random" height="300px" width="auto"/>
          <h2 className={styles.title}>Random</h2>
          <p className={styles.info}>Can't decide on a drink? Get a random Drink here!</p>
        </NavLink>

      </div>
    </>
  )
}

export default Home 