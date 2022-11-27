import React from "react";
import{ FaCar} from "react-icons/fa"
import  { Link } from "react-router-dom"

export default function(){
    return(
        <nav>
        <div className="nav-left">
        <FaCar className="logo"/>  
        <h1>Carentall</h1>
        </div>
        <div className="nav-right">
            <ul>
                <li>Become a renter </li>
                <li>Rental deals</li>
                <li>How to work?</li>
                <li>why choose us</li>
            </ul>
           <div className="login"> <Link to={"/signin"} className="login-text" >Login</Link></div>
        </div>

        </nav>
    )

}