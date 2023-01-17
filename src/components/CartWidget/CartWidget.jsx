import {Link} from "react-router-dom"
import "./CartWidget.css"
import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Badge} from "@nextui-org/react";
import { CartIcon } from './CartIcon';


export const CartWidget = () => {
  const {cart,getTotalItem} = useContext(CartContext)
    return (
        <Link to="/cart">
      <div className="container-cart">
      <Badge
          color="error"
          content={getTotalItem()>0?getTotalItem():null}

          shape="circle"
        >
          <CartIcon fill="currentColor" size={30} />
        </Badge>
      </div>
          </Link>
      
    );
  };