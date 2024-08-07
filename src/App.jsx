import React , {useState} from "react";
import Header from "./compenents/Header";
import Content from "./compenents/Content";

function App() {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [number,setNumbre]=useState(0);


  function toggleCart() {
        setCart(!cart);
        setMenu(false);

    }
  function toggleMenu() {
    setMenu(!menu);
    setCart(false);
  }

  return (
    <>
      <Header menu={menu} toggleMenu={toggleMenu} cart={cart} toggleCart={toggleCart}></Header>
      <Content menu={menu}></Content>

    </>
  )
}

export default App
