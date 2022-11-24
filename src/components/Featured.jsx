import React from "react";
import {FaArrowRight} from "react-icons/fa"
import Car from "./Car"
export default function(){
    return (
        <section className="featured">
            <div className="head">
            <h1>FEATURED CARS</h1>         
            </div>
            <div className="body">
            <div className="cars">
            <Car/>
            <Car/>
            <Car/>
            <Car/>
            <Car/>
            <Car/>
            <Car/>
            <Car/>
            </div>
          <div className="bottom"> <button>Show All Vehicles <FaArrowRight/></button></div> 
            </div>
        </section>
    )
}