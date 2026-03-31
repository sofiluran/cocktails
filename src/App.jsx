import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Categories from './pages/Categories'
import NonAlcoholic from './pages/NonAlcoholic'
import DrinkDetails from './pages/DrinkDetails'
import CategoryDetails from './pages/Categories/CategoryDetails'
import Random from './pages/Random'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home pageTitle="The Drink Route" subtitle="Find Your Next Favorite Drink" info="Discover hundreds of recipes, from timeless classics to refreshing alcohol-free treats." />}></Route>
          <Route path="/categories" element={<Categories pageTitle="See our categories" subtitle="Choose a category and see more drinks" />}>
            <Route path=":categoryname" element={<CategoryDetails />}>
              <Route path=":id" element={<DrinkDetails />}></Route>
            </Route>
          </Route>
          <Route path="/random" element={<Random pageTitle="Get a random drink!" />}></Route>
          <Route path="/nonalcoholic" element={<NonAlcoholic pageTitle="Non Alcoholic Drinks" />}>
            <Route path=":id" element={<DrinkDetails />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
