import "./ItemListContainer.css"

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = ({greeting}) =>{
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(()=>{
        const collectionRef = categoryId
            ? query(collection(db, "ecommerce"), where ("category", "==", categoryId))
            : collection(db, "ecommerce")

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(productsAdapted)
                //console.log(productsAdapted);
            })
            .catch(error => {
                console.warn(error);
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    //console.log(productos);

    return(
        <div className="ItemListContainer">
            <h1 className="tituloPrincipal">{greeting}</h1>
            <ItemList products = {productos}/>
        </div>
    )
}

export default ItemListContainer;