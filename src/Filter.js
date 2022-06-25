import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import { Link, useRouteMatch } from "react-router-dom";
import { Tab } from "@mui/material";


export default function Filter() {
    const match = useRouteMatch();
    console.log(match);
    const fetchCatagory = () => {
        return fetch(`https://api.escuelajs.co/api/v1/categories`)
            .then((res) => {
                return res.json();
            })
    }

    const { data, isLoading, error } = useQuery("catagory", fetchCatagory);
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error...</div>;
    }


    return (
        <div>
            {data.map((catagory, index) => (
                <Tab label={catagory.name} textColor="white" href={`/Home/${catagory.id}`} > </Tab>
            ))
            }

        </div >
    );
}