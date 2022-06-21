import React, { useEffect, useState } from "react";
import "./style.css";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";


export default function product({cart, setCart }) {
    // const [cart , setCart] = useState([]);
    const {Id} = useParams();
    // console.log(Id);
    const [data, setData] = useState([]);
    // const { data, isLoading, error } = useQuery("product", () =>
    //     fetch(`https://fakestoreapi.com/products/${Id}`).then((res) => res.json())
    // );
    
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
    // if (error) {
    //     return <div>Error...</div>;
    // }
    // console.log(data);
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${Id}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        }
            )
        }, [Id])

        // useEffect(() => {
        //     setCart(JSON.parse(localStorage.getItem("cart")));
        // }, [cart]);

        function addToCart(product) {
            // console.log(product);
            const cartAdded = [...cart, product];
            setCart(cartAdded);
            // setIsInCart(true);
            // localStorage
            //     .setItem("cart", JSON.stringify(cart));
        }

    return (
        <div>
            <p>earyer</p>
            
            <div key={data.id}>
            <button onClick={
                () => {
                    addToCart(data);
                }
            } >Add to cart</button>
            <h2>{data.title}</h2>
            <p>{data.price}</p>
            <img src={data.image} alt="" />
            <p>{data.description}</p>
            </div>

        </div>
    );
    }
  