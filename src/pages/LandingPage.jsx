import React from "react";
import Nav from "../components/Nav"
import Home from "../components/Home"
import Steps from "../components/Steps"
import Footer from "../components/Footer"
import Featured from "../components/Featured"

export default function () {
    return (
        <>
            <Nav />
            <Home />
            <Featured />
            <Steps />
            <Footer />
        </>
    )
}