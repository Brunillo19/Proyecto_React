import { useEffect } from "react"
import { useState } from "react"
import './ItemCount.css'

import { Button,Modal,Text } from "@nextui-org/react"
import { Link } from "react-router-dom"


const Counter = ({ stock, initial=0, onAdd }) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    
  };
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
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

 
  return (
    <div className="CartCount">

      <Button onPress={decrement} size='xs' >-</Button>
      <h2>{counter}</h2>
      <Button onPress={increment} size='xs'>+</Button>
    
      {/* <Button onClick={() => {
       
        onAdd(counter)}} disabled={stock===0 || counter===0} >Agregar al carrito</Button> */}
        <div>
      <Button auto shadow onPress={handler} onClick={() => {
       
       onAdd(counter)}} disabled={stock===0 || counter===0} >
        Agregar al carrito
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        
      >
        <Modal.Header>
          <Text b id="modal-title" size={18}>
            Producto agregado al carrito!
          </Text>
        </Modal.Header>
        <Modal.Body>
          
            <Text  size={18}>
              Desea Ir al carrito?
            </Text>
          <Button auto flat color="error" onPress={closeHandler}>
         <Link to="/">
            Seguir comprando
         </Link>
          </Button>
          <Button auto onPress={closeHandler}>
         <Link to="/cart">
            ir al carrito
         </Link>
          </Button>
          
        </Modal.Body>
      </Modal>
    </div>
  
    </div>
  )
}

export default Counter
