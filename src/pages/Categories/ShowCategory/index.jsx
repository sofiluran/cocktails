import styles from './showcategory.module.css'
import { NavLink } from 'react-router-dom'

const ShowCategory = ({strDrink ,idDrink}) => {
  return (
    <NavLink className={styles.showCategory} to={`${idDrink}`}>{strDrink}</NavLink>
  )
}

export default ShowCategory