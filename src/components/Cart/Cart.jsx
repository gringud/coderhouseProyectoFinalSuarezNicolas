import "./Cart.css"
import { useContext } from "react";
import { CartContex } from "../../CartContex/CartContex";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useContext(CartContex)
    const { clearCart } = useContext(CartContex)
    console.log(cart);

    let totalCarrito = 0;
    cart.map((itemCarrito) => {
        totalCarrito = totalCarrito + itemCarrito.price;
    }) 
    


    


    return (
        <div className="carritoCompras">
            {cart.map((itemCarrito)=>{
                console.log("object");
                return(
                    <CartItem key={itemCarrito.id} {...itemCarrito}/>
                )
            })}
            <p className="tituloTotalCarrito">Total: ${totalCarrito}</p>
            <button className="botonVaciarCarrito" onClick={() => clearCart()}>Limpiar carrito</button>
            <Link to="/Checkout" className="checkout">Checkout</Link>
        </div>
    )
}

export default Cart;