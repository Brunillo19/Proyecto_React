import { CartWidget } from "../CartWidget/CartWidget";
import "./navBar.css";



const NavBar = () => {
  

return (
    <div className="navbar-container">
      <div className="container-logo">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dfbuxinmw/image/upload/v1669511154/sintitulo_yjyi3m.jpg"
          alt=""
        />
      </div>
      <ul className="navbar">
        <li className="navbar-item">PCs</li>
        <li className="navbar-item">Pantallas</li>
        <li className="navbar-item">Periféricos</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;