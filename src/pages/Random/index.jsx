import { useState } from 'react'
import styles from './random.module.css'

const Random = ({ pageTitle }) => {
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
      <h1 className={styles.randomPage}>{pageTitle}</h1>
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={getRandomDrink}>Click me to get a random drink</button>
        {randomDrink ?
          <div className={styles.random}>
            <h2>{randomDrink.strDrink}</h2>
            <img className={styles.randomImage} src={randomDrink.strDrinkThumb} height="400px" width="auto" />
            <div className={styles.ingredients}>
              <h3>Ingredients:</h3>
              <div>
                <div>{randomDrink.strIngredient1}</div>
                <div>{randomDrink.strIngredient2}</div>
                <div>{randomDrink.strIngredient3 && randomDrink.strIngredient3}</div>
                <div>{randomDrink.strIngredient4 && randomDrink.strIngredient4}</div>
                <div>{randomDrink.strIngredient5 && randomDrink.strIngredient5}</div>
                <div>{randomDrink.strIngredient6 && randomDrink.strIngredient6}</div>
                <div>{randomDrink.strIngredient7 && randomDrink.strIngredient7}</div>
              </div>
            </div>
            <p className={styles.instructions}>{randomDrink.strInstructions}</p>
          </div>
          : ""
        }
      </div>
    </>
  )
}

export default Random