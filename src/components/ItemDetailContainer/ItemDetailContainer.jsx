
import React, { useEffect, useState } from 'react'
import "./ItemDetailContainer.css"
import { products } from '../../productsMock'
import ItemCount from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()
  console.log( id )

  useEffect( ()=>{

    const productSelected = products.find( producto => producto.id === parseInt(id) )
    setProduct(productSelected)

  }, [id])

  console.log(product)

  return (
    <div className='detail'>
      <img src={product.img} alt="" />
      <div className='detailText'>

        <h2>{product.name}</h2>
        <h3>${product.price}</h3>
        <h5>{product.description}</h5>
        <ItemCount initial={1} stock={product.stock}/><p className='stock'>(Disponibilidad en stock: {product.stock})</p>
      </div>
    </div>
  )
}

export default ItemDetailContainer