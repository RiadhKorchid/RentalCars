import React from "react";
import{ FaCar} from "react-icons/fa"
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
            <button>Login</button>
        </div>

        </nav>
    )

}