import React from 'react'
import Item from './components/Item'
import Cart from './components/Cart'
const App = () => {
  return (
    <div>
      <Item name="Macbook" price={1000000}/>
      <Item name="Macbook Pro" price={200000}/>
      <Item name="Macbook Air" price={150000}/>
      <Cart />
    </div>
  )
}

export default App