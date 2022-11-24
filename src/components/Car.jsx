import React from "react";
import { ImLocation2 } from "react-icons/im"
import { GiAlarmClock } from "react-icons/gi"
import car from "../images/car.jpg"
export default function () {
    return (
        <div className="car">
            <img src={car} alt="" />
            <h1> 100 <span>DT</span></h1>
            <h2> BMW SÉRIE 5 520I PACK LUXURY </h2>
            <hr />
            <div className="location">   
             <ImLocation2 className="icon" />
                <span>Tunis</span>
                </div>
            <div className="time">
            <GiAlarmClock className="icon" />
            <span >13h hours ago</span>
            </div>
            <button>View offer</button>
        </div>
    )
}