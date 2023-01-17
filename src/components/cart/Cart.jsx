import React from "react";
import { useContext,useState } from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css'
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import Form from "../form/Form";
import { Button } from "@nextui-org/react";
const Cart = () => {
    const {cart,clearCart,setCart,getTotalPrice,getTotalItem} = useContext(CartContext)
    const [buy,setBuy] = useState(false)
    const [orderId,setOrderId]=useState(null)
    const limpiar =()=> {
      Swal.fire({
        title: "Está seguro de eliminar el carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, seguro",
        cancelButtonText: "No, no quiero",
      }).then((result) => {
        if (result.isConfirmed) {
          //logica para eleminar del carrito
          setCart([])
          Swal.fire({
            title: "Borrado!",
            icon: "success",
            text: "El carrito ha sido eliminado",
          });
        }
      });
    }


    
        if (orderId){
          return <div>
            <h2>{orderId}</h2>
            <Link to={"/"}>
              <Button>Realizar otra compra</Button></Link>
          </div>
        }
    if (cart.length<1) {
      return <h2>No hay productos en el carrito</h2>
    }
    return (
        <div className="cart-container">
          <div className="container-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
    
          </div>
              
          <div className="cart-info">
          <h3>Cantidad de productos: {getTotalItem()}</h3>
          <h3>Precio total: { getTotalPrice() > 0 ? getTotalPrice() : "No hay items"}</h3>   
            {buy?(<Form cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart}/>):(
          
            <div >
              <Button onClick={()=>  setBuy(true)}>Comprar</Button>
              <Button onClick={() => limpiar()} >
                Vaciar carrito
              </Button>
            </div>
            )}
            </div>
        </div>
      )
}
export default Cart