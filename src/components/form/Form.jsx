import { useState } from "react"
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const Form= ({cart,getTotalPrice, setOrderId,clearCart})=>{
    const [userData,setUserData] =useState({name:"",lastName:""})
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
    /* const orderDoc = doc(db,"products",1)
    updateDoc(orderDoc,{stock:2}) */
    cart.map(element=> {
        updateDoc(doc(db,"products",element.id),{stock:element.stock-element.quantity}) 
    })


    clearCart()
}


return(
    <div>
        <form action=""onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Ingrese su nombre"
            name="name"
            value={userData.name}
            onChange={(event)=>setUserData ({...userData,name:event.target.value})}/>

            <input type="text" 
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
            onChange={(event)=>setUserData ({...userData,email:event.target.value})}/>
            <button type="submit">Finalizar compra</button>
        </form>
    </div>
)
}
export default Form