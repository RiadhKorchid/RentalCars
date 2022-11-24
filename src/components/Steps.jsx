import React from "react";
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneOutboundFill} from "react-icons/bs"
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
                    <h1>Choose your location and find your best car.</h1>
                </div>
                <div >
                    <BsFillTelephoneOutboundFill className="icon"/>
                    <h1>Call the vehicle owner  and discuss</h1>
                </div>
               <div>
                <AiFillCar className="icon"/>
                <h1>Book your car </h1>
               
               </div>
            </div>
        </div>


    </section>
    
    )
}