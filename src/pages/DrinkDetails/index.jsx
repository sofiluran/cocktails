import styles from './drinkdetails.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DrinkDetails = () => {
  const [drink, setDrink] = useState(null)

  const { id } = useParams()

  const getDrink = async () => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()
      setDrink(data.drinks)
      console.log(data.drinks)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDrink()
  }, [id])

  return (
    <>
      <div className={styles.drinkDetails}>
        {drink && drink.map((drink, index) =>
          <div key={index}>
            <h1>{drink.strDrink}</h1>
            <img src={drink.strDrinkThumb} height="100px" width="auto" />
            {drink.strInstructions && <p>{drink.strInstructions}</p>}
            {drink.strIngredient1 && <p>{drink.strIngredient1}</p>}
            {drink.strIngredient2 && <p>{drink.strIngredient2}</p>}
            {drink.strIngredient3 && <p>{drink.strIngredient3}</p>}
            {drink.strIngredient4 && <p>{drink.strIngredient4}</p>}
            {drink.strIngredient5 && <p>{drink.strIngredient5}</p>}
            {drink.strIngredient6 && <p>{drink.strIngredient6}</p>}
          </div>
        )}
      </div>
    </>
  )
}

export default DrinkDetails