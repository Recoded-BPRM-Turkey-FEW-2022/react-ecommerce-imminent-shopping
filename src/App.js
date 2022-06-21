import React, {useState , useEffect} from "react";
import "./style.css";
import { useQuery } from "react-query";
import Allproduct from "./Allproduct";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";

export default function App() {
const data = window.localStorage.getItem("cartItems");
const cartItem = data ? data : "[]";
console.log(JSON.parse("[]"));
  const [cart , setCart] = useState(JSON.parse(cartItem));

  // useEffect(() => {
  //   const data = window.localStorage.getItem("cartItems");
  //   console.log(JSON.parse(data));
  //   if ( data !== null ) setCart(JSON.parse(data), 10);
  //   console.log(cart);
  // }, []);

  useEffect(()=> {
    window.localStorage.setItem("cartItems", JSON.stringify(cart));
    console.log(cart);
    // setCart(cart)
  }, [cart])

  
  return (
    
     <BrowserRouter>
     <Navbar />
     <Switch>
      
      <Route  path="/Home" >
        <Allproduct cart={cart} setCart={setCart} />
      </Route>
      <Route  path="/cart" >
        <Cart  cart={cart} setCart={setCart} />
      </Route>
       
      </Switch>

     </BrowserRouter>
   
  );
}
