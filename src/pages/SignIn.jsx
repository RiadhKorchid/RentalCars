import React from "react";
import {FcGoogle} from "react-icons/fc"
import {AiFillFacebook} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import { Link } from "react-router-dom"
export default function ()
{
    return (
        <section className="login-section">
                <div className="container">
                    <input type="text"  placeholder="Enter email.."/>
                    <input type="text" placeholder="Enter password.." />
                    <a href="">forget password ?</a>
                    <button>Sign in</button>
                    <h1>don't have an account ?<Link to={"/signup"}>Sign up!</Link></h1>
                    <h2>or sign in with </h2>
                    <div className="icons">
                         <FcGoogle  className="icon"/> <AiFillFacebook  className="icon" color="dodgerblue" /><BsTwitter className="icon" color="dodgerblue"/>
                    </div>


                </div>



        </section>
    )
}