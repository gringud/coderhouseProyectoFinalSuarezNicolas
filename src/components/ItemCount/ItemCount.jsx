import { useContext, useState } from "react";
import { CartContex } from "../../CartContex/CartContex";
const ItemCount = ({stock, initial, onAdd}) => {
    const [ quantity, setQuantity ] = useState(initial);

    const { cart, clearCart, totalQuantity, Total } = useContext(CartContex);

    const incrementar = () =>{
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrementar = () => {
        if (quantity > 1){
            setQuantity(quantity-1)
        }
    }

    const presionoBoton =() =>{
        console.log("Presione el boyon");
        console.log(cart);
    }
    
    return(
        <div className="controles">
            <div className="controlesArriba">
                <button className="controlBoton" onClick={decrementar}>-</button>
                <h4 className="controlContador">{quantity}</h4>
                <button className="controlBoton" onClick={incrementar}>+</button>
            </div>
            <div className="controlesAbajo">
                <button className="controlBoton"  onClick={() => onAdd(quantity)} disabled={!stock}/* onClick={presionoBoton} */>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;