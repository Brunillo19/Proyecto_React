
import React, { useEffect, useState } from 'react'
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import ItemDetail from '../itemDetail/ItemDetail'
import {getDoc,doc,collection} from "firebase/firestore"
import { db } from '../../firebaseConfig'
import { Triangle } from 'react-loader-spinner'

const ItemDetailContainer = () => {
  

  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState([false])
  const { id } = useParams()
  

  useEffect( ()=>{


    const itemCollection = collection(db,"products")
    const ref = doc(itemCollection,id)
    getDoc(ref)
    .then(res=>{
      setProduct(
        {
          id:res.id,
          ...res.data()
        }
      )
    })
    setTimeout(()=>{setIsLoading(false)},1200)
  }, [id])

  

  return (
    <div>
      
      {isLoading?<Triangle
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
    css="justify-content=center"
  />:<ItemDetail product={product}  />}
    </div>
  )
}

export default ItemDetailContainer