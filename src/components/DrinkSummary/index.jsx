import { NavLink } from 'react-router-dom'
import styles from './drinksummary.module.css'

const DrinkSummary = ({ strDrink, idDrink }) => {
  return (
    <NavLink className={styles.drinkSummary} to={`/nonalcoholic/${idDrink}`}>
      <h3>{strDrink}</h3>
    </NavLink>
  )
}

export default DrinkSummary