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

    const total = () =>{
        const totalCarrito = 0;
        cart.map((itemCarrito) => {
            console.log("Entre al carrito y veo q hay", itemCarrito.price);
            totalCarrito = totalCarrito + itemCarrito.price;
        })
        return totalCarrito;
    }

    return(
        <CartContex.Provider value = {{ cart, addItem, removeItem, clearCart, total }}>
            {children}
        </CartContex.Provider>
    )
}
