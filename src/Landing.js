import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function Landing (){
    return (
        <div id="landing-img">
            <div id="overLay" ></div>
            <div id="landing-text" >
                <h1>shoppiness</h1>
                <p>relieve your stress by shopping <span>like women do</span> </p>
                  <Button variant="contained"><Link className="landing-link" to="/Home">create your hppiness by signing up</Link></Button> 
                  <Button variant="contained"><Link className="landing-link" to="/Home">Skip Happiness for now</Link></Button> 
            </div>
        </div>
    )
}

export default Landing