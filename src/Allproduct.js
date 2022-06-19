import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import Mainproducts from "./Mainproducts";
import { Route, Router, BrowserRouter, Switch, Link, useRouteMatch } from "react-router";
import Catagory from "./Catagory";
import Filter from "./Filter";
import Product from "./product";




export default function Allproduct() {
    const match = useRouteMatch();
    console.log(match);
   
    return (
        <div> 
            <Filter />
            <Switch>
            <Route exact path={`${match.url}`}>
            <Mainproducts />
            </Route>

            <Route exact path={`${match.url}/:catagory`}>
            <Catagory />
            </Route >

            <Route exact path={`${match.url}/products/:Id`}>
            <Product />
            </Route>

            
            </Switch>
        </div>
    );

}