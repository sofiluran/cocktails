import { NavLink } from 'react-router-dom'
import styles from './categorycard.module.css'

const CategoryCard = ({ strCategory }) => {
  const urlName = strCategory.replaceAll(" ", "_").replaceAll("/", "&")

  return (
    <NavLink className={styles.category} to={`/categories/${urlName}`}>
      <div>{strCategory}</div>
    </NavLink>
  )
}

export default CategoryCard