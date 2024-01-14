import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { CartContex } from "../../CartContex/CartContex";
const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContex)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        //console.log("LLEGUE HASTA AKA");
        addItem(item, quantity)
    }

    return(
        <div className="detalleProducto">
            <div className="detalleIzq">
                <img className="detalleIMG" src={img} alt={name} />
            </div>
            <div className="detalleDer">
                <div className="detalleNombre">{name}</div>
                <div className="detalleCategoria">Categoria: {category}</div>
                <div className="detalleDescripcion">{description}</div>
                <div className="detallePrecio">Precio: ${price}</div>
                <div className="detalleStock">Stock: {stock}</div>            
                <div className="botonesCarrito">
                    {
                        quantityAdded > 0
                            ? (<Link to="/cart" className="Option">Terminar Compra</Link>)
                            : (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;