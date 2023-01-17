import { useState } from "react"
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { Input,Button } from "@nextui-org/react"


const Form= ({cart,getTotalPrice, setOrderId,clearCart})=>{
    const [userData,setUserData] =useState({name:"",lastName:"",phone:"",email:""})
    const total=getTotalPrice()

const handleSubmit=(event)=>{
    event.preventDefault()

    const order={
        buyer:userData,
        items:cart,
        total:total,
        date: serverTimestamp()
    }
    
    
    const orderCollection = collection(db,"orders")
    addDoc(orderCollection,order)
    .then(res=>setOrderId(res.id))
    cart.map(element=> {
        updateDoc(doc(db,"products",element.id),{stock:element.stock-element.quantity}) 
    })


    clearCart()
}


return(
    <div>
        <form action=""onSubmit={handleSubmit}>
            <Input
            underlined
            color="primary"
            labelPlaceholder="Ingrese su nombre"
            name="name"
            value={userData.name}
            onChange={(event)=>setUserData ({...userData,name:event.target.value})}
            maxRows='1'
            />
            <Input
            underlined
            color="primary"
            labelPlaceholder="Ingrese su apellido"
            name="lastName"
            value={userData.lastName}
            onChange={(event)=>setUserData ({...userData,lastName:event.target.value})}
            maxRows='1'
            />
            <Input
            underlined
            color="primary"
            labelPlaceholder="Ingrese su telefono"
            name="phone"
            type="phone"
            value={userData.phone}
            onChange={(event)=>setUserData ({...userData,phone:event.target.value})}
            maxRows='1'
            />
            <Input
            underlined
            color="primary"
            labelPlaceholder="Ingrese su correo"
            name="email"
            type="email"
            value={userData.email}
            onChange={(event)=>setUserData ({...userData,email:event.target.value})}
            maxRows='1'
            />

            {/* <input type="text" 
            placeholder="Ingrese su apellido"
            name="lastName"
            value={userData.lastName}
            onChange={(event)=>setUserData ({...userData,lastName:event.target.value})}/>
            
            <input type="number" 
            placeholder="Ingrese su numero de telefono"
            name="phone"
            value={userData.phone}
            onChange={(event)=>setUserData ({...userData,phone:event.target.value})}/>
            
            
            <input type="email" 
            placeholder="Ingrese su correo"
            name="email"
            value={userData.email}
            onChange={(event)=>setUserData ({...userData,email:event.target.value})}/> */}
            <Button type="submit">Finalizar compra</Button>
        </form>
    </div>
)
}
export default Form