import React , {useState, useEffect} from "react";
import "./style.css";
import { useQuery } from "react-query";
import Mainproducts from "./Mainproducts";
import { Route, Router, BrowserRouter, Switch, Link, useRouteMatch } from "react-router";
import Catagory from "./Catagory";
import Filter from "./Filter";
import Product from "./product";
import Name from "./Name"




export default function Allproduct({cart, setCart, addItem}) {
    
    console.log(cart);
    
    const match = useRouteMatch();
    console.log(match);

    
   
    const { data, isLoading, error } = useQuery("products", () =>
    fetch("https://api.escuelajs.co/api/v1/products").then((res) => res.json())
  );
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
}
if (error) {
    return <div>Error...</div>;
}



    return (
        <div> 
            <Filter />

            <Switch>
            <Route exact path={`${match.url}`}>
            <Mainproducts cart={cart} setCart={setCart} data={data} />
            </Route>

            <Route exact path={`${match.url}/:catagory`}>
            <Catagory  cart={cart} setCart={setCart} />
            </Route >

            <Route exact path={`${match.url}/products/:Id`}>
            <Product addItem={addItem} cart={cart} setCart={setCart} />
            </Route>

            <Route exact path={`${match.url}/name`}>
            <Name />
            </Route>

            
            </Switch>
        </div>
    );

}