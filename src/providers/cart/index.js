import { createContext,useContext,useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart,setCart] = useState([])

    const addToCart =(value)=>{
        return setCart([...cart,value])
    }



    return(
        <CartContext.Provider value={{cart,addToCart}}>
                {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=> useContext(CartContext)