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
import Landing from "./Landing"

export default function App() {
// const data = JSON.parse(localStorage.getItem("cartItems") || "[]");
// console.log(data);
  const [cart , setCart] = useState([]);
  console.log(cart);

  // useEffect(() => {
  //   const data = window.localStorage.getItem("cartItems");
  //   console.log(JSON.parse(data));
  //   if ( data !== null ) setCart(JSON.parse(data), 10);
  //   console.log(cart);
  // }, []);

  // useEffect(()=> {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   console.log(cart);
  //   // setCart(cart)
  // }, [cart])

  
  // console.log(localCart);


  const addItem = (item) => {
  
    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = [...cart];
    
    //assuming we have an ID field in our item
    let {id} = item;
    
    //look for item in cart array
    let existingItem = cartCopy.find(cartItem => cartItem.id == id);
    
    //if item already exists
    if (existingItem) {
        existingItem.quantity += 1 //update item
    } else { //if item doesn't exist, simply add it
      cartCopy.push(item)
    }
    
    //update app state
    setCart(cartCopy)
    
    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)
    
  }


  useEffect(() => {
    let localCart = localStorage.getItem("cart");
    //turn it into js
    // localCart = JSON.parse(localCart);
    console.log(localCart);
    //load persisted cart into state if it exists
    if (localCart) setCart(JSON.parse(localCart))
    
  }, [])

  
  return (
    
     <BrowserRouter>
     <Navbar />
     <Switch>
     <Route exact path="/" >
        <Landing />
      </Route>
      <Route  path="/Home" >
        <Allproduct addItem={addItem} cart={cart} setCart={setCart} />
      </Route>
      <Route  path="/cart" >
        <Cart  cart={cart} setCart={setCart} />
      </Route>
       
      </Switch>

     </BrowserRouter>
   
  );
}
