import { createContext, useState } from "react";
import Swal from 'sweetalert2'
export const CartContext = createContext()
const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (element) =>{
if(isInCart(element)){
    let newArray = cart.map(product => {
        if (product.id === element.id){
            
            return {...product,quantity:element.quantity}
        }
    else {
        return product
    }})
        setCart(newArray)
}
else {
        setCart([...cart,element])
    }}
    const getTotalPrice = () => {
      const total= cart.reduce ((acc,element)=> {
        return acc+(element.price*element.quantity)},0)
      return total     }
      const getTotalItem= ()=> {
        const numtotal=cart.reduce((acc,element)=>{
          return acc+element.quantity},0)
        return numtotal
      }
      
      
      const isInCart = (item) => {
        return cart.some(element => element.id === item.id)
      }
      const clearCart= () => {
        setCart([])
      }
      const clearProduct= (id)=>{
        Swal.fire({
          title: "Está seguro de eliminar el producto?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, seguro",
          cancelButtonText: "No, no quiero",
        }).then((result) => {
          if (result.isConfirmed) {
            //logica para eleminar el producto
            const newArray = cart.filter (product => product.id!==id)
            setCart(newArray)
            Swal.fire({
              title: "Borrado!",
              icon: "success",
              text: "El producto ha sido eliminado",
            });
          }
        });
      }
      const getQuantityById = (id) => {
        const product = cart.find(element => element.id === id)
        
        return product?.quantity
      }
      const data = {
        cart,
        addToCart,
        clearCart,
        getQuantityById,
        getTotalPrice,
        getTotalItem,
        clearProduct
      }
      return(
        <CartContext.Provider value= {data}>
        {children}
    </CartContext.Provider>)
}

export default CartContextProvider