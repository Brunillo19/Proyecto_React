import React from 'react';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from "./components/navBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './components/cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
      <Navbar />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        
        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/category" element={<ItemListContainer />}/>

        <Route path="/item/:id" element={ <ItemDetailContainer /> } />

        <Route path="/cart" element={ <Cart/> } />

        <Route path="*" element={ <h2>Lo siento esta url no existe</h2> } />

      </Routes>

      </CartContextProvider>
    
    </BrowserRouter>

  );
}

export default App;
