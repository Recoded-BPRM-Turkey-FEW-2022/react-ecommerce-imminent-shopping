import React, { useEffect, useState } from "react";
import "./style.css";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
 
export default function catagory() {
    // console.log(match);
    const { catagory } = useParams();
    // console.log(catagory);
    // const { data, isLoading, error } = useQuery("filter", () =>
    // fetch(`https://fakestoreapi.com/products/category/${catagory}`).then((res) => res.json())
    // );
    // console.log(data);


    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
    // if (error) {
    //     return <div>Error...</div>;
    // }
    const [data, setData] = useState([]);
    // const [isInCart, setIsInCart] = useState(false);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${catagory}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        }
            )
        }, [catagory])
        function addToCart(product) {
            // console.log(product);
            const cartAdded = [...cart, product];
            setCart(cartAdded);
            // setIsInCart(true);
            // localStorage
            //     .setItem("cart", JSON.stringify(cart));
        }
        // function removeFromCart(id) {
        //     const cartRemoved = cart.filter((product) => product.id !== id);
        //     setCart(cartRemoved);
        //     setIsInCart(false);
        //     localStorage
        //         .setItem("cart", JSON.stringify(cart));
        // }

    return (
        <div>
        <p>sdgarg</p>
        {data.map((product) => (
        <div style={{width:"100px"}} key={product.id}>
            {/* <button onClick={ ()=>addToCart(product) } >Add to cart</button> */}
            <Link to={`/Home/products/${product.id}`}>gooo</Link>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <img style={{width:"100px"}} src={product.image} alt="" />
          </div>
      ))}
        </div>
    );
    }