import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import { Box, Card, Typography, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";


export default function Cart({ cart, setCart }) {
    // let items = localStorage.getItem("cart");
    // let cartItems = JSON.parse(items);


    const removeItem = (itemID) => {
        console.log(itemID);

        //create cartCopy
        let cartCopy = [...cart]

        cartCopy = cartCopy.filter(item => item.id != itemID);

        //update state and local
        setCart(cartCopy);

        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem("cart", cartString)
    }


    // function removeFromCart(id) {
    //         const cartRemoved = cart.filter((product) => product.id !== id);
    //         console.log(cartRemoved);
    //         // setCart(cartRemoved);
    //         localStorage
    //             .setItem("cartItems", JSON.stringify(cartRemoved));
    //     }

    console.log(cart);

    return (
        <div>
            {cart.map((item, index) => {

                return (
                    <div>
                        <Card className="product-container-cart">
                            <CardMedia>
                                <img src={item.images[0]} alt="product" />

                            </CardMedia>
                            <CardContent className="product-info-cart" >
                                <Typography gutterBottom variant="h5" component="h2" style={{
                                    padding: "0px", margin: "0px"
                                }}>
                                    {item.title}
                                </Typography>

                                <Typography gutterBottom variant="body2" color="textSecondary" component="p" style={{
                                    padding: "25px", margin: "0px"
                                }}>
                                    {item.description}

                                </Typography>
                                <Typography gutterBottom variant="body2" color="text.secondary" style={{
                                    fontSize: "20"
                                }}>
                                    Price:  <span
                                        style={{
                                            backgroundColor: "rgb(0 127 255)", fontSize: "20", borderRadius: "5px",
                                            color: "white", padding: "5px", margin: "5px"
                                        }}>
                                        {item.price} $</span>
                                </Typography>
                                <Typography gutterBottom>
                                    {item.quantity ? <p>{item.quantity}</p> : ""}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <Link to={`Home/products/${item.id}`}>View</Link>
                                </Button>
                                <Button onClick={() => removeItem(item.id)}>Remove</Button>
                            </CardActions>
                        </Card>
                    </div>

                );
            }
            )}
        </div>
    );

}



 // <Box
                    //     sx={{
                    //         width: "100%",
                    //         height: "fitContent",
                    //         padding: "10px",
                    //         display: "flex",
                    //         flexDirection: "row",
                    //         justifyContent: "space-around",
                    //         backgroundColor: 'primary.dark',
                    //         '&:hover': {
                    //             backgroundColor: 'primary.main',
                    //             opacity: [0.9, 0.8, 0.7],
                    //         },
                    //         marginBottom: "15px",
                    //     }}
                    // >





/* <Card sx={{
    height: "50", width: "stretch", maxWidth: "70",
}}>
    <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.images[0]}
    />
</Card>

<h2>{item.title}</h2>
<Typography variant="body2" color="text.secondary">
    Price:  <span
        style={{
            backgroundColor: "rgb(0 127 255)", fontSize: "15", borderRadius: "10px",
            color: "white"
        }}>
        {item.price}$</span>
</Typography>
{item.quantity ? <p>{item.quantity}</p> : ""}
<img src={item.image} alt="" />
<button onClick={() => removeItem(item.id)}>Remove</button> */

                    // </Box>