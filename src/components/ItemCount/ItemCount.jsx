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
    console.log("closed");
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

      <Button onClick={decrement} size='xs' >-</Button>
      <h2>{counter}</h2>
      <Button onClick={increment} size='xs'>+</Button>
    
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
         <Link to="/">
          <Button auto flat color="error" onPress={closeHandler}>
            Seguir comprando
          </Button>
         </Link>
         <Link to="/cart">
          <Button auto onPress={closeHandler}>
            ir al carrito
          </Button>
         </Link>
          
        </Modal.Body>
      </Modal>
    </div>
  
    </div>
  )
}

export default Counter
