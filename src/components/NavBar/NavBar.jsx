import logo from "../../assets/react.svg"
import "./NavBar.css"
import carrito from "../../assets/carrito.svg";
import { Link } from "react-router-dom";
import { CartContex } from "../../CartContex/CartContex";
import { useContext } from "react";
const NavBar = () =>{
    const { cart } = useContext(CartContex)
    console.log(cart.length);
    return(
        <nav className="NavBar">
            <Link className="linkLogo" to="/">
                <img className="logoApp" src={logo} alt="" />
                <h3>Ecomerce</h3>
            </Link>

            <div className="navCentro">
                <Link className="LinkTitulo" to={'/category/celular'}>Celulares</Link>
                <Link className="LinkTitulo" to={'/category/tablet'} >Tablets</Link>
                <Link className="LinkTitulo" to={'/category/notebook'} >Notebooks</Link>
            </div>

            <Link className="carritoImg" to="/cart">
                <img src={carrito} alt="" />
                <p className="carritoNumero">{cart.length}</p>
                {/* <p className="carritoNumero">{(cart.length===0 ?"" :cart.length)}</p> */}

            </Link>

        </nav>
    )
}

export default NavBar;