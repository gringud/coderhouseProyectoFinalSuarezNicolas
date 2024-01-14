import { createContext, useState } from "react";

export const CartContex = createContext({
    cart:[]
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            //console.log(isInCart());
            console.log("EL ID NO ESTA");
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error("El producto ya fue agregado");
        }
    }

    const removeItem = (itemId) => {
        console.log("ENTREEE");
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }
    
    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return(
        <CartContex.Provider value = {{ cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContex.Provider>
    )
}
