import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Counter from "../itemCount/ItemCount";

const ItemDetail = ({product}) => {
    const {addToCart,getQuantityById} = useContext(CartContext)
    const onAdd = ( quantity ) => {
        addToCart({...product, quantity:quantity})

      }
      const quantity = getQuantityById(product.id)
      
    return (
        <div className='detail'>
      <img src={product.img} alt="" />
      <div className='detailText'>

        <h2>{product.name}</h2>
        <h3>${product.price}</h3>
        <h5>{product.description}</h5>
        <Counter onAdd={onAdd} stock={product.stock} initial={quantity}/><p className='stock'>(Disponibilidad en stock: {product.stock})</p>
      </div>
    </div>
    )
}
export default ItemDetail


