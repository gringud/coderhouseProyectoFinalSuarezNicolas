import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from './components/Cart/Cart';
import { CartProvider } from './CartContex/CartContex'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Todos los productos"}/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos por categoria"}/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer greeting={"Detalle del producto"}/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
          </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
