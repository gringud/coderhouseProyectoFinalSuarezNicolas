import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
    return(
        <div className="cardItem">
            <div className="nombreProducto">
                {name}
            </div>
            <img className="imgProducto" src={img} alt={name}/>
            <div className="datosProducto">
                <div className="precioProducto">Precio: ${price}</div>
                <div className="stockProducto">Stock: {stock}</div>
            </div>
            <div className="verDetalle">
                <Link className="verDetalleLink" to={`/item/${id}`}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item;