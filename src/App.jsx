import React, { useState } from "react";
import Header from "./compenents/Header";
import Content from "./compenents/Content";

function App() {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState(0);
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
  const handleAddToCart = () => {
    setCartItems(prevCartItems => prevCartItems + number);

  }

  return (
    <>
      <Header menu={menu}
        toggleMenu={toggleMenu}
        cart={cart}
        toggleCart={toggleCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
        number={number}
      >

      </Header>
      <Content
        number={number}
        handleAddToCart={handleAddToCart}
        decrement={decrement}
        incerement={incerement}></Content>

    </>
  )
}

export default App
