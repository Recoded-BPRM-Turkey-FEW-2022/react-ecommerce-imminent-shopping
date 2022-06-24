import React, {useState} from "react";
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

  const[products, setProducts] = useState(data)



    function byPrice() {
      const Filter = [...data].sort((a, b) => {
          return a.price - b.price;
      });
      console.log(Filter);
      setProducts(Filter);
  }

  function byName() {
    const filter = [...data].sort(
        (a, b) => a.title.localeCompare(b.title)
    );
    setProducts(filter);
}

function byRating() {
  const filter = [...products].sort((a, b) => {
      return a.rating.rate - b.rating.rate;
  });
  setProducts(filter);
}


console.log(products);

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

      <div>
      <Button variant="contained" onClick={()=> byPrice()}>By Price</Button>
      <Button variant="contained" onClick={()=> byName()}>By Name</Button>
      <Button variant="contained" onClick={()=> byRating()}>By Rating</Button>
      {/* <Button variant="contained">Contained</Button>
      <Button variant="contained">Contained</Button> */}
      </div>

       {products.map((product) => (


<Card  key={product.id} sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  height="140"
  image={product.images[0]}
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
