import { useState } from 'react'
import './App.css'
import RecipeDescription from './components/Description.jsx'
import RecipePhoto from './components/Photos.jsx'
import RecipeIngredients from './components/Ingredients.jsx'

function App() {

  return (
    <>
      <div className="App">
        <div>
          <RecipePhoto />
        </div>
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </>
  )
}

export default App