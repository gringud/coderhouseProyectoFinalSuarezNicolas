import "./Cart.css"
import { useContext } from "react";
import { CartContex } from "../../CartContex/CartContex";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart } = useContext(CartContex)
    const d = new Date();
    console.log(""+d.getTime());


    


    return (
        <div className="carritoCompras">
            {cart.map((itemCarrito)=>{
                return(
                    <CartItem key={itemCarrito.id} {...itemCarrito}/>
                )
                
            })}
        </div>
    )
}

export default Cart;