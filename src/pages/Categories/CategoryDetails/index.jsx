import styles from './categorydetails.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ShowCategory from '../ShowCategory'

const CategoryDetails = () => {
  const [categoryDetails, setCategoryDetails] = useState(null)
  const { categoryname } = useParams()

  const getCategoryDetails = async () => {
    try {
      let apiName = categoryname.replaceAll("&", "/")
      const response = await fetch(`${import.meta.env.VITE_API_CATEGORIES_DETAILS_ENDPOINT}${apiName}`)
      const data = await response.json()
      setCategoryDetails(data.drinks)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategoryDetails()
  }, [categoryname])

  return (
    <>
      <Outlet />
      <h2 className={styles.categoryTitle}>{categoryname.replaceAll("_", " ")}</h2>
      <div className={styles.wrapper}>
        {categoryDetails && categoryDetails.map((item, index) => <ShowCategory key={index} {...item} />)}
      </div>
    </>
  )
}

export default CategoryDetails