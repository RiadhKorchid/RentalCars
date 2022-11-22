import React from "react";
import { IoLocation } from "react-icons/io5";
import { BsCalendar2WeekFill } from "react-icons/bs"
import {AiFillCar} from "react-icons/ai"
export default  function ()
{
    return (
    <section className="steps">
        <div className="steps-header">
                <h1> HOW IT WORK     </h1>
                <h2> Rent with following 3 working steps </h2>
        </div>
        <div className="steps-body">
            <div className="howItWork">
                <div>
                    <IoLocation className="icon"/>
                    <h1>Choose location</h1>
                    <p>Choose your location and find your best car. </p>
                </div>
                <div >
                    <BsCalendar2WeekFill className="icon"/>
                    <h1>Pick-up date</h1>
                    <p>Select your pick up date and time to book your car . </p>
                </div>
               <div>
                <AiFillCar className="icon"/>
                <h1>Book your car </h1>
                <p> book your car and we will deliver it directly to you </p>
               </div>
            </div>
        <div className="search">
            <fieldset className="location">
                <legend>LOCATION</legend>
                <input type="text"  placeholder="enter your location"/>
            </fieldset>
            <fieldset>
                <legend> PICKUP DATE</legend>
                <input type="date" />
            </fieldset>
            <fieldset>
                <legend>RETURN DATE</legend>
                <input type="date" />
            </fieldset>
            <button>Search</button>
            

            </div>


        </div>


    </section>
    
    )
}