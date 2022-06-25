import React, { useEffect, useState } from "react";
import "./style.css";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";


import { Typography } from "@mui/material";
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Box, Container } from "@mui/material";


export default function product({ cart, setCart, addItem }) {
    // const [cart , setCart] = useState([]);
    const { Id } = useParams();
    const [data, setData] = useState([]);

    console.log("it worked")


    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${Id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            }
            )
    }, [Id])

    console.log(data);

    // useEffect(() => {
    //     setCart(JSON.parse(localStorage.getItem("cart")));
    // }, [cart]);

    // function addToCart(product) {
    // console.log(product);
    // if(cart.includes(product)){
    //     product.quantity =+ 1
    // } 
    // else {
    // const cartAdded = [...cart, product];
    // setCart(cartAdded);
    // }

    // setIsInCart(true);
    // localStorage
    //     .setItem("cart", JSON.stringify(cartAdded));
    // }

    return (
        <div>
            <Card className="product-container">
                <CardMedia>
                    <img src={data.images} alt="product" />

                </CardMedia>
                <CardContent className="product-info">
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{
                        fontSize: "20", margin: "5px", padding: "20px"
                    }}>
                        {data.description}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary" style={{
                        fontSize: "20"
                    }}>
                        Price:  <span
                            style={{
                                backgroundColor: "rgb(0 127 255)", fontSize: "20", borderRadius: "5px",
                                color: "white", padding: "5px", margin: "5px"
                            }}>
                            {data.price} $</span>
                    </Typography>
                    <Button onClick={() => addItem(data)} size="small" color="primary">
                        <Link to={`/cart`}>Add to cart</Link>
                    </Button>
                </CardContent>
                <CardActions>



                </CardActions>

            </Card>
            {/* <div className="product-container" >
                <div className="product-image" style={{ padding: "10px" }}>
                    <img src={data.images} alt="product" />
                </div>
                <div className="product-info">
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                    <Typography variant="body2" color="text.secondary" >
                        Price:  <span
                            style={{
                                backgroundColor: "rgb(0 127 255)", fontSize: "15", padding: "5px", borderRadius: "10px",
                                color: "white"
                            }}>
                            {data.price}$</span>
                    </Typography>
                    <button onClick={() => addItem(data)}>Add to cart</button>
                </div>
            </div> */}
        </div>
    );
}
