import React, { useState } from "react";
import Header from "./compenents/Header";
import Content from "./compenents/Content";

function App() {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [click, setClick] = useState(false);
  const [number, setNumbre] = useState(0);


  function toggleCart() {
    setCart(!cart);
    setMenu(false);

  }
  function toggleMenu() {
    setMenu(!menu);
    setCart(false);
  }
  function incerement() {
    setNumbre(n => n + 1)
  }
  function decrement() {
    if (number > 0) {
      setNumbre(n => n - 1)
    } else {
      setNumbre(0)
    }
  }
  function handleClickCart() {
    if (number>0){
      setClick(true)
    }
   
  }

  return (
    <>
      <Header menu={menu} setClick={setClick} toggleMenu={toggleMenu} cart={cart} toggleCart={toggleCart} click={click} number={number} handleClickCart={handleClickCart}></Header>
      <Content menu={menu} click={click} number={number} handleClickCart={handleClickCart} decrement={decrement} incerement={incerement}></Content>

    </>
  )
}

export default App
