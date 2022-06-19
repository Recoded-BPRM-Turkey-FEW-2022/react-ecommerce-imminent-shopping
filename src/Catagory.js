import React, { useEffect, useState } from "react";
import "./style.css";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
 
export default function catagory() {
    // console.log(match);
    const { catagory } = useParams();
    console.log(catagory);
    const { data, isLoading, error } = useQuery("filter", () =>
    fetch(`https://fakestoreapi.com/products/category/${catagory}`).then((res) => res.json())
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
        <p>sdgarg</p>
        {data.map((product) => (
        <div key={product.id}>
            <Link to={`/Home/products/${product.id}`}>gooo</Link>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <img src={product.image} alt="" />
          </div>
      ))}
        </div>
    );
    }