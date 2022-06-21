import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import {Link, useRouteMatch} from "react-router-dom";


export default function Filter() {
    const match = useRouteMatch();
    console.log(match);
    const fetchCatagory =  () => {
        return fetch(`https://fakestoreapi.com/products/categories`)
         .then((res) => {
                return res.json();
         })
            }
    
    const { data, isLoading, error } = useQuery("catagory", fetchCatagory);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error...</div>;
    }

    // console.log(data);
    // const match = useRouteMatch();
    return (
        <div>
        {data.map((catagory, index) => (
            <Link key={index} to={`/Home/${catagory}`}>{catagory}</Link>
        ))}
        </div>
    );
    }
