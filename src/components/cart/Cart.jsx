import React from "react";
import { useContext,useState } from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css'
import CartItem from "../cartItem/CartItem";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import Form from "../form/Form";
const Cart = () => {
    const {cart,clearCart,setCart,getTotalPrice} = useContext(CartContext)
    const [buy,setBuy] = useState(false)
    const [orderId,setOrderId]=useState(null)
    console.log(orderId);
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
        <Link to={"/"}>Volver</Link>
      </div>
    }
    if (cart.length<1) {
        return <h2>No hay productos en el carrito</h2>
    }
    return (
        <div >
          <div >
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
    
          </div>
              
            {buy?(<Form cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart}/>):(
            
              <div >
            <h2>Descripcion del carrito:</h2>
            <h3>Cantidad de productos: </h3>
            <h3>Precio total: { getTotalPrice() > 0 ? getTotalPrice() : "No hay items"}</h3>   
            <div >
              <button onClick={()=>  setBuy(true)}>Comprar</button>
              <button onClick={() => limpiar()} >
                Vaciar carrito
              </button>
            </div>
          </div>
            )}
        </div>
      )
}
export default Cart