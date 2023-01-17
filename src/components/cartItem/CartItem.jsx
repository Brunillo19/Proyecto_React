import { Button } from "@nextui-org/react";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item})=> {
    const {clearProduct} = useContext(CartContext)
return(
    <div key={item.id} className="">
      <img src={item.img} alt="" />
      <div className="">
        <h2>{item.name}</h2>
        <h2>${item.price}.-</h2>
        <h2>Unidades: {item.quantity}</h2>
      </div>
      <Button onClick={()=>clearProduct(item.id)}>Quitar</Button>
    </div>
)
}
export default CartItem