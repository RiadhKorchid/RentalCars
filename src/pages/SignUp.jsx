import React from "react";
import { Link } from "react-router-dom"
export default function (){
    return (
        <div className="signup-section">
            <div className="container">
                <input type="text" placeholder="Enter name..." />
                <input type="text" placeholder="Enter phone..." />
                <input type="text" placeholder="Enter email..." />
                <input type="text" placeholder="Enter password..." />
                <button>Sign up</button>
                <p> Already have an account ? <Link to={"/signin"} className="signup"> Sign in !</Link></p>
            </div>
        </div>
    )
}