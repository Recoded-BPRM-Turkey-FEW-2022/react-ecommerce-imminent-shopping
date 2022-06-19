import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function Main() {

  const { data, isLoading, error } = useQuery("products", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );
  // console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
}
if (error) {
    return <div>Error...</div>;
}

  return (
    <div>
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
