import React from "react";
import "./style.css";
import { useQuery } from "react-query";


export default function Cart({cart, setCart}) {
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
            <h1>Cart</h1>
            
            <ul>
                {cart.map((item, index) => {
                    return (
                        <li key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.price}</p>
                            {item.quantity ? <p>{item.quantity}</p> : "" }
                            <img src={item.image} alt="" />
                            <button onClick={()=> removeItem(item.id)}>Remove</button>
                        </li>
                    );
                }
                )}
                
                       
                
            </ul>
        </div>
    );

}