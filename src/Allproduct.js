import React , {useState, useEffect} from "react";
import "./style.css";
import { useQuery } from "react-query";
import Mainproducts from "./Mainproducts";
import { Route, Router, BrowserRouter, Switch, Link, useRouteMatch } from "react-router";
import Catagory from "./Catagory";
import Filter from "./Filter";
import Product from "./product";




export default function Allproduct({cart, setCart}) {
    
    console.log(cart);
    
    const match = useRouteMatch();
    // console.log(match);

    
   
    const { data, isLoading, error } = useQuery("products", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );
//   console.log(data);

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
            <Product cart={cart} setCart={setCart} />
            </Route>

            
            </Switch>
        </div>
    );

}