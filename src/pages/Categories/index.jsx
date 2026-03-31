import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './categories.module.css'
import CategoryCard from './CategoryCard'

const Categories = ({pageTitle, subtitle}) => {
  const [category, setCategory] = useState(null)

  const getCategory = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_CATEGORIES_ENDPOINT)
      const data = await response.json()
      setCategory(data.drinks)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <>
      <div className={styles.categoryPage}>
        <h1>{pageTitle}</h1>
        <p>{subtitle}</p>
      </div>
      <Outlet />
      {category &&
        <div className={styles.category}>
          {category.map((item, index) => <CategoryCard key={index} {...item} />)}
        </div>
      }
    </>
  )
}

export default Categories