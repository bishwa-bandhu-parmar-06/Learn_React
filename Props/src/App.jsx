// import './App.css'

import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
function App() {
  let foodItems = [ "Rajma", "Dal", "Rice", "Chapati", "Paneer", "Salad", "Raita", "Papad", "Dessert"];
  return (
    <>
      <h1>Food Items List</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
      
    </>
  )
}

export default App
