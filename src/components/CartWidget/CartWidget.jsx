import {Link} from "react-router-dom"
import "./CartWidget.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
export const CartWidget = () => {
  const {cart,getTotalItem} = useContext(CartContext)
    return (
      <Link to="/cart">
      <div className="container-cart">
        <AiOutlineShoppingCart
          style={{fontSize: "2rem"}}
          />
        <div className="bubble-counter">
          <span>{getTotalItem()>0?getTotalItem():null}</span>
          
        </div>
      </div>
          </Link>
    );
  };