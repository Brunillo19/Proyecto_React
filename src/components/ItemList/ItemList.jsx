import React from "react"
import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = ({ items }) => {
  return (
    <div className="container-cards">
      {items.map((element) => {
        return (
        <Item key={element.id} element={element} />
      )})}
    </div>
  )
}

export default ItemList
