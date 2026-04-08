import styles from './drinkdetails.module.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DrinkDetails = () => {
  const [drink, setDrink] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams()

  const getDrink = async () => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()
      setDrink(data.drinks)
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
          <div key={index} className={styles.drink}>
            <h1>{drink.strDrink}</h1>
            <img src={drink.strDrinkThumb} height="300px" width="auto" />
            {drink.strInstructions && <p className={styles.instructions}>{drink.strInstructions}</p>}
            <div className={styles.ingredients}>
              <h3>Ingredients:</h3>
              <div>
                {drink.strIngredient1 && <div>{drink.strIngredient1}</div>}
                {drink.strIngredient2 && <div>{drink.strIngredient2}</div>}
                {drink.strIngredient3 && <div>{drink.strIngredient3}</div>}
                {drink.strIngredient4 && <div>{drink.strIngredient4}</div>}
                {drink.strIngredient5 && <div>{drink.strIngredient5}</div>}
                {drink.strIngredient6 && <div>{drink.strIngredient6}</div>}
              </div>
            </div>
          </div>
        )}
        <button onClick={() =>navigate(-1)}>Close</button>
      </div>
    </>
  )
}

export default DrinkDetails