import { useContext, useState } from "react";
import { CartContex } from "../../CartContex/CartContex";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { db } from "../services/firebase/firebaseConfig";

const CheckOut = () => {
    const [ loading, setLoading ] = useState(false);
    const [ orderId, setOrderId ] = useState("");

    const { cart, total, clearCart } = useContext(CartContex);

    let totalCarrito = 0;
    cart.map((itemCarrito) => {
        totalCarrito = totalCarrito + itemCarrito.price;
    }) 

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: totalCarrito,
                date: Timestamp.fromDate(new Date())
            }
            //console.log(objOrder);

            const batch = writeBatch(db)
            const outOfStock=[];
            const ids = cart.map(prod => prod.id)   //traigo los ID de los productos del carrito
            const productsRef = collection(db, "ecommerce")
            /* const productsRef = collection(db, "ecommerce") */
            //console.log("productsAddedFormFirestore", db);
            const productsAddedFormFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFormFirestore
            docs.forEach(doc=>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
            if(outOfStock.length === 0){
                await batch.commit()
                console.log(db);
                const orderRef = collection(db, "orders")
                console.log(orderRef);
                console.log(objOrder);  // traigo los datos de la compra
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("Hay productos que estan fuera de Stock");
            }

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    if (loading){
        return <h1 className="tituloPrincipal">Se esta generando su Orden...</h1>
    }

    if (orderId){
        return <h1 className="tituloPrincipal">El ID de su orden es: {orderId}</h1>
    }

    return(
        <div>
            <h1 className="tituloPrincipal">Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default CheckOut;