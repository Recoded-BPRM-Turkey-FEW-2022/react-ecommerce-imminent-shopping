import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import Allproduct from "./Allproduct";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Navbar";

export default function App() {
  
  return (
    
     <BrowserRouter>
     <Navbar />
     <Switch>
      
      <Route  path="/Home" >
        <Allproduct/>
      </Route>
       
      </Switch>

     </BrowserRouter>
   
  );
}
