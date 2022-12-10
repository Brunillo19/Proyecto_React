import { useState } from "react"
import './ItemCount.css'

const Counter = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial)

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1)
    }
  }

  const onAdd = ( quantity ) => {
    alert(`Sus ${quantity} productos se han agregado exitosamente al carrito`)
  }

  return (
    <div className="CartCount">

      <button onClick={decrement} >-</button>
      <h2>{counter}</h2>
      <button onClick={increment} >+</button>
      <button onClick={() => onAdd(counter)} >agregar al carrito</button>
    </div>
  )
}

export default Counter