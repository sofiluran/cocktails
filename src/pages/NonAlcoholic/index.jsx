import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './nonalcoholic.module.css'
import DrinkSummary from './DrinkSummary'

const NonAlcoholic = ({ pageTitle }) => {
  const [nonAlcoholic, setNonAlcoholic] = useState(null)

  const getNonAlcoholicDrinks = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_NA_ENDPOINT)
      const data = await response.json()
      setNonAlcoholic(data.drinks)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNonAlcoholicDrinks()
  }, [])

  return (
    <>
      <div className={styles.nonAlcoholic}>
        <h1>{pageTitle}</h1>
      </div>
      <Outlet />
      {nonAlcoholic &&
        <div className={styles.drinks}>
          {nonAlcoholic.map((drink, index) => <DrinkSummary key={index} {...drink} />)}
        </div>
      }
    </>
  )
}

export default NonAlcoholic