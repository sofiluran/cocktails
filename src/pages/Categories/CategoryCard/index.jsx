import { NavLink } from 'react-router-dom'
import styles from './categorycard.module.css'

const CategoryCard = ({ strCategory }) => {
  return (
    <NavLink className={styles.category} to={`/categories/${strCategory}`}>     
      <div>{strCategory}</div>
    </NavLink>
  )
}

export default CategoryCard