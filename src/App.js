import React from 'react';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from "./components/navBar/NavBar"



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a BI TECH"}/>
    </div>
  );
}

export default App;
