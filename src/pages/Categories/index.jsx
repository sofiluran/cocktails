import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './categories.module.css'
import CategoryCard from './CategoryCard'

const Categories = () => {

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
      <Outlet />
      <div className={styles.categoryPage}>
        <h1>See our categories</h1>
        <p>choose a category and see more drinks</p>
      </div>
      {category &&
        <div className={styles.category}>
          {category.map((item, index) => <CategoryCard key={index} {...item} />)}
        </div>
      }
    </>
  )
}

export default Categories