import { useState, useEffect } from "react"
import ItemList from "../itemList/ItemList"
import {useParams} from "react-router-dom"
import { Triangle } from 'react-loader-spinner'
import {getDocs,collection,query,where} from "firebase/firestore"
import { db } from "../../firebaseConfig"

const ItemListContainer = () => {

  const { categoryName } = useParams()




  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([false])

  

  useEffect(() => {
    setIsLoading(true)

  
      const itemCollection = collection(db,"products")
      if (categoryName){
        const q =query (itemCollection,where("category","==",categoryName))
 getDocs(q)
 .then((res)=> {
  const products=res.docs.map(product => {
    return {
  ...product.data(),
  id:product.id
 }})
 setItems(products)
      })
      .catch((err)=>console.log(err))
    }else {

      getDocs(itemCollection)
      .then ((res) => {
        const products =res.docs.map(product => {
          return {
            ...product.data(),
            id:product.id
          }
        })
        setItems(products);
      })

      .catch((err)=>console.log(err))
    }
    
      setTimeout(()=>{setIsLoading(false)},1200)}
  , [ categoryName ])
    
 


  return (
    <div className="light">
      
      {isLoading?<Triangle
      display="flex"
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>:<ItemList items={items} />}

      
      
    </div>
  )
      }

export default ItemListContainer
