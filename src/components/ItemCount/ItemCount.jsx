import { useEffect } from "react"
import { useState } from "react"
import './ItemCount.css'
import Swal from 'sweetalert2'
import { Link} from "react-router-dom"

const Counter = ({ stock, initial=1, onAdd }) => {
  const [counter, setCounter] = useState(initial)
  useEffect(()=> {
    setCounter(initial)
  },[initial])
  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

 
  return (
    <div className="CartCount">

      <button onClick={decrement} >-</button>
      <h2>{counter}</h2>
      <button onClick={increment} >+</button>
    
      <button onClick={() => {
       Swal.fire({
        title: 'Producto agregado con éxito',
        text:'Desea ir al carrito?',
        showDenyButton: true,
        confirmButtonText: 'Seguir Comprando',
        denyButtonText: `Ir al carrito`,
        position: 'top-end',
        icon: 'success',
        timer: 3000
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */

        if (result.isDenied) {         
        }
        
      })
        onAdd(counter)}} disabled={stock===0 || initial===0}>Agregar al carrito</button>
    </div>
  )
}

export default Counter