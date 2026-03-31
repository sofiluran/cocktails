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
      const response = await fetch(`${import.meta.env.VITE_API_CATEGORIES_DETAILS_ENDPOINT}${categoryname}`)
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
      <div className={styles.wrapper}>
        {categoryDetails && categoryDetails.map((item, index) => <ShowCategory key={index} {...item} />)}
      </div>

    </>

  )
}

export default CategoryDetails