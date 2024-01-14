import Item from "../Item/Item";

const ItemList =({products})=>{
    //console.log(products[1].id);
    return(
        <div className="ListaProductos">
            {products.map((prod) => {
                //console.log("object");
                return <Item key={prod.id} {...prod}/>
            })}
        </div>
    )
}

export default ItemList;