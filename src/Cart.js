import React from "react";
import "./style.css";
import { useQuery } from "react-query";


export default function Cart() {
    let items = localStorage.getItem("cartItems");
    let cart = JSON.parse(items);
    
    console.log(cart);

    return (
        <div>
            <h1>Cart</h1>
            
            <ul>
                {cart.slice(1).map((item, index) => {
                    return (
                        <li key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.price}</p>
                            <img src={item.image} alt="" />
                        </li>
                    );
                }
                )}
                
                       
                
            </ul>
        </div>
    );

}