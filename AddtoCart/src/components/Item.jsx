import React,{useContext} from 'react'
import { CartContext } from '../context/CartContext'
const Item = (props) => {
    const cart = useContext(CartContext);
    // console.log("Cart: ", cart)
  return (
    <div>
        <div className="itemcard">
            <h4>Item Name: {props.name}</h4>
            <p>Price: {props.price}$</p>
            <button onClick={() =>cart.setItems([...cart.items, {name: props.name, price: props.price}])}>Add to cart</button>
        </div>
    </div>
  )
}

export default Item