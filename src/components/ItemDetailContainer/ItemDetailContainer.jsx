import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = ({greeting}) => {
    const [ product, setproduct ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    const {itemId} = useParams();   //traigo el ID
    //console.log(itemId);
    useEffect(() => {
        const docRef = doc(db, "ecommerce", itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }

                setproduct(productAdapted)
            })
            .catch(error => {
                console.warn(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])
    
    console.log(product);
    return(
        <div className="ItemDetailContainer">
            <h1 className="tituloPrincipal">{greeting}</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;