import {Link} from "react-router-dom"
import "./CartWidget.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
export const CartWidget = () => {
    return (
      <Link to="/cart">
      <div className="container-cart">
        <AiOutlineShoppingCart
          style={{fontSize: "2rem"}}
          />
        <div className="bubble-counter">
          <span>7</span>
        </div>
      </div>
          </Link>
    );
  };