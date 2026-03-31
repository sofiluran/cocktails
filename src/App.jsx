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
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories />}>
            <Route path=":categoryname" element={<CategoryDetails />}>
              <Route path=":id" element={<DrinkDetails />}></Route>
            </Route>
          </Route>
          <Route path="/random" element={<Random />}></Route>
          <Route path="/nonalcoholic" element={<NonAlcoholic />}>
            <Route path=":id" element={<DrinkDetails />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
