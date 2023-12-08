import React from "react";
import '../CSS/tracker.css'

export default Tracker 
function Tracker()  {
    

    return (
        <>
        <div className="  text-slate-200" id="owning-tracker-div">{/* owning div */}

        <div id="container-tracker" className=" bg-slate-600 bg-opacity-50">
            <div className=" font-semibold text-base" id="content-tracker-div">{/* content div */}
                <span className=" font-serif">Track Your Shipment</span>
                <blockquote className=" text-slate-200">
                    
                    "Our cutting-edge transportation tracking services provide you with real-time visibility into your shipments, allowing you to optimize your logistics and ensure timely deliveries. With 24/7 monitoring and automated alerts, you'll always know the status of your goods, giving you peace of mind and the ability to make informed decisions. Whether you're shipping across town or across the globe, our services can help you get your products where they need to go, faster and more efficiently."
                </blockquote>
                <div className=" inline-flex gap-1 justify-center">
                    <input className=" outline-cyan-700 bg-slate-800 text-slate-100 text-lg placeholder:text-lg placeholder:text-slate-100 p-2 rounded-sm" placeholder="Enter Your Tracking Number " type="text" />
                    <button className=" text-center p-2 sm:text-lg bg-cyan-700 text-slate-100">TRACK</button>
                </div>
                

                </div>
        </div>
        

        </div>
        
        </>
    )
}