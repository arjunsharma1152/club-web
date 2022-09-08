import React from "react";
import {BrowserRouter as Router,Link,Routes,Switch} from 'react-router-dom';

import Gallery from "../photo-gallery/gallery";
const Header=()=>(

    <div className="header">
     <Router>
         
         <div className="options">
         
          <Link className="option" to="/shop">shop</Link>
          <Link className="option" to="/shop">shop</Link>
          <Gallery/>
          </div>

         
          </Router>
                 
    </div>
    
)
export  default Header