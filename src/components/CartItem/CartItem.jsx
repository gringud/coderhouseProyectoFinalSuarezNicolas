import { useContext } from "react";
import { CartContex } from "../../CartContex/CartContex";

const CartItem = (itemCarrito) => {
    const removeItem = useContext(CartContex)
    /* console.log(itemCarrito); */
    return (
        <div className="carritoComprasDetalle" >
            <div className="carritoIzq">{itemCarrito.name}</div>
            <div className="carritoCentro">
                <div className="centroCantidad">Cantidad: {itemCarrito.quantity}</div>
                <div className="centroPrecio">Precio x Unidad: {itemCarrito.price}</div>
            </div>
            <div className="carritoDer">
                <div className="derechaSubtotal">Subtotal: ${itemCarrito.quantity*itemCarrito.price}</div>
                <button className="botonEliminarItemCarrito" onClick={() => removeItem(itemCarrito.id)}>X</button>
            </div>
        </div>
    )
}

export default CartItem;


