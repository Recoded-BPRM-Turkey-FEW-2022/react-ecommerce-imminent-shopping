import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"



function Name(){
    const [data, setData] = useState([]);
    // const [isInCart, setIsInCart] = useState(false);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?sort=desc`)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        }
            )
        }, [])

        // function addToCart(product) {
        //     // console.log(product);
        //     const cartAdded = [...cart, product];
        //     setCart(cartAdded);
        //     // setIsInCart(true);
        //     // localStorage
        //     //     .setItem("cart", JSON.stringify(cart));
        // }


        console.log("data");
        return (
            <div>
            <p>sssssss</p>
            {data.map((product) => (
            <div style={{width:"100px"}} key={product.id}>
                
                <Link to={`/Home/products/${product.id}`}>gooo</Link>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <img style={{width:"100px"}} src={product.image} alt="" />
              </div>
          ))}
            </div>
        );
}

export default Name;