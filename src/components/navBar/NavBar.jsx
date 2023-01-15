import { CartWidget } from "../cartWidget/CartWidget";
import "./navBar.css";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const NavBar = () => {
  const {cart} = useContext(CartContext)

return (
    <div className="navbar-container">
      <Link to="/"className="container-logo">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dfbuxinmw/image/upload/v1669511154/sintitulo_yjyi3m.jpg"
          alt=""
        />
      </Link>
      <ul className="navbar">
        <Link to="/" className="navbar-item">Inicio</Link>
        <Link className="navbar-item" to="/category/PCs">PCs</Link>
        <Link className="navbar-item" to="/category/Pantallas">Pantallas</Link>
        <Link className="navbar-item" to="/category/Perifericos">Periféricos</Link>
      </ul>
      {cart.length>0?<CartWidget />:null}
    </div>
  );
};

export default NavBar;