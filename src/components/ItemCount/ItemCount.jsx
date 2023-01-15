import { useEffect } from "react"
import { useState } from "react"
import './ItemCount.css'
import Swal from 'sweetalert2'

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
        title: "Agregado!",
        icon: "success",
        text: "El producto ha sido añadido al carrito",
      })
        onAdd(counter)}} >agregar al carrito</button>
    </div>
  )
}

export default Counter