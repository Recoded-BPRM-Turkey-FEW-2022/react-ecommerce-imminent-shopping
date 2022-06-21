import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Main({ data, cart, setCart }) {

//   const { data, isLoading, error } = useQuery("products", () =>
//     fetch("https://fakestoreapi.com/products").then((res) => res.json())
//   );
//   console.log(data);

//   if (isLoading) {
//     return <div>Loading...</div>;
// }
// if (error) {
//     return <div>Error...</div>;
// }

  return (






    
    <div>
       {data.map((product) => (


<Card  key={product.id} sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  height="140"
  image={product.image}
  alt="green iguana"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  {product.title}
  </Typography>
  <Typography variant="body2" color="text.secondary">
  {product.price}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small"><Link to={`/Home/products/${product.id}`}>gooo</Link></Button>
  <Button size="small">Learn More</Button>
</CardActions>
</Card>


        
        // <div >
        //   <Link to={`/Home/products/${product.id}`}>gooo</Link>
        //   <h2></h2>
        //   <p></p>
        //   <img style={{width:"100px"}} src= alt="" />
        //   </div>
      ))}
    </div>
  );
}
