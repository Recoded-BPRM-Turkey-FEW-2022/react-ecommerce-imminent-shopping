import React, { useState } from "react";
import "./style.css";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Main({ data, cart, setCart }) {

  const [products, setProducts] = useState(data)



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
    <Container>

      <div>

        <Container
          sx={{
            width: "100%",
            height: "fitContent",

            padding: "10px",
            display: "flex",
            justifyContent: "end",
            marginRight: "10px",
            // backgroundColor: 'primary.main',

            margin: "15px",
          }}
        >

          <div><Button variant="outlined" onClick={() => byPrice()}>By Price</Button>
            <Button variant="outlined" onClick={() => byName()}>By Name</Button>
            <Button variant="outlined" onClick={() => byRating()}>By Rating</Button>
          </div>

        </Container>

      </div>
      <Grid container spacing={3} columns={15}>

        {products.map((product) => (

          <Grid item xs={8} md={4} lg={3} >
            <Link style={{
              textDecoration: "none",
            }}
              to={`/Home/products/${product.id}`}>
              <Card style={{
                textAlign: "center",
              }} key={product.id} sx={{ maxWidth: 345, height: 300 }}>
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
                    Price:  <span
                      style={{
                        backgroundColor: "rgb(0 127 255)", fontSize: "15", padding: "5px", borderRadius: "10px",
                        color: "white"
                      }}>
                      {product.price}$</span>
                  </Typography>
                </CardContent>
                <CardActions>



                </CardActions>
              </Card>
            </Link>
          </Grid>))}

      </Grid>




    </Container >
  );
}
