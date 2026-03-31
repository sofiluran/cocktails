import { useState, useEffect } from 'react'
import styles from './random.module.css'

const Random = () => {

  const [randomDrink, setRandomDrink] = useState(null)

  const getRandomDrink = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_RANDOM_ENDPOINT)
      const data = await response.json()
      setRandomDrink(data.drinks[0])

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={styles.randomPage}>Get a random drink!</div>
      <button className={styles.button} onClick={getRandomDrink}>Click me to get a random drink</button>

      {randomDrink ?
        <div className={styles.random}>
          <h1>{randomDrink.strDrink}</h1>
          <img className={styles.randomImage} src={randomDrink.strDrinkThumb} height="400px" width="auto" />
          <p>{randomDrink.strIngredient1}</p>
          <p>{randomDrink.strIngredient2}</p>
          <p>{randomDrink.strIngredient3 && randomDrink.strIngredient3}</p>
          <p>{randomDrink.strIngredient4 && randomDrink.strIngredient4}</p>
          <p>{randomDrink.strIngredient5 && randomDrink.strIngredient5}</p>
          <p>{randomDrink.strIngredient6 && randomDrink.strIngredient6}</p>
          <p>{randomDrink.strIngredient7 && randomDrink.strIngredient7}</p>
          <p>{randomDrink.strInstructions}</p>
        </div>
        : ""
      }
    </>

  )
}

export default Random