import React, { useEffect, useState } from "react";
import "./style.css";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";

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


export default function catagory() {

    const { catagoryId } = useParams();
    console.log(parseInt(catagoryId));

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/categories/${parseInt(catagoryId)}/products`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setCatagory(parseInt(catagoryId))
            }
            )
    }, [data])




    // console.log(data);


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

                {data.map((product) => (

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