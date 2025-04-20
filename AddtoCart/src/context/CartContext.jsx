import { createContext ,useState} from "react";

export const CartContext = createContext(null);

// export const useCart = () =>{
//     const cart = useContext(CartContext);
//     // console.log("Cart: ", cart)
//     return cart;
// }

export const CartProvider = (props) =>{
    const [items, setItems] = useState([]);
    return(
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}