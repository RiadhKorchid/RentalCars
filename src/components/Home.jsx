import React from "react";
import bgCar from "../images/bg-car.png"
import playStore from "../images/PlayStore.svg"
import appStore from "../images/AppStore.svg"
export default function ()
{
    return(
        <section className="home">
            <div className="home-left">
                <h1>Find,book, and rental car in <span>Easy</span> steps. </h1>
                <p>Get a car wherever and whenever you need it with your iOS or Android  device . </p>
                <div className="stores"> 
                <img src={appStore} alt="" />
                <img src={playStore} alt="" />
                   
                </div>
            </div>
            <div className="home-right">
                <img src={bgCar} alt="" />
               
            </div>
        </section>
    )
}
