import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import {NavLink, useRouteMatch} from "react-router-dom";


export default function Navbar() {
    // const fetchCatagory =  () => {
    //     return fetch(`https://fakestoreapi.com/products/categories`)
    //      .then((res) => {
    //             return res.json();
    //      })
    //         }
    
    // const { data, isLoading, error } = useQuery("catagory", fetchCatagory);

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
    // if (error) {
    //     return <div>Error...</div>;
    // }

    // console.log(data);
    // const match = useRouteMatch();
    return (
        <div>
        <NavLink exact to="/Home">Home</NavLink>
        <NavLink exact to="/cart">cart</NavLink>
        {/* {data.map((catagory, index) => (
            <NavLink key={index} exact to={`/Home/${catagory}`}>{catagory}</NavLink>
        ))} */}
        </div>
    );
    }
