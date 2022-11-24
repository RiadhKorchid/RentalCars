import React from "react";
import "../styles/app.scss"
import { Route , Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage";
import Auth from "../pages/Auth"
export default function () {

    return (<>
        
        <Routes>
            <Route path="/" element={ <LandingPage/>  } />
            <Route path="/auth" element={ <Auth/> } />
        </Routes>
    </>)


}