import React from "react";

import '../CSS/services.css'

import airImg from '../assets/images/s1.png'
import cargoImg from '../assets/images/s2.png'
import truckImg from '../assets/images/s3.png'
import railImg from '../assets/images/s4.png'

export default Services 

function Services()  {

    const services = [
        {
            title : 'AIR TRANSPORT',
            img : airImg,
            description : 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'
        },
        {
            title : 'CARGO TRANSPORT',
            img : cargoImg,
            description : 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'
        },
        {
            title :'TRUCKS TRANSPORT',
            img : truckImg,
            description : 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'
        },
        {
            title :'TRAIN TRANSPORT',
            img : railImg,
            description : 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'
        }
    ]
const servicesMaper = services.map((Details) => 
    <div className=" bg-slate-600 sm:text-lg bg-opacity-30" id="mapping-service-div">
        <div id="map-img-div"><img src={Details.img} alt="" /></div>
        <div id="map-content-div">
            <textarea disabled>{Details.description}</textarea>
            <span className=" float-right hover:text-lime-600 focus:text-lime-600">Read More</span>
        </div>
        
    </div>
    )

    return (
        <>
       
            <div className=" text-slate-300 bg-slate-800" id="owning-service-div"> {/* owning services div */}

            <div id="heading-service-div"> {/* heading services div */}
            <span className=" sm:text-3xl font-semibold text-lg">Our <p className=" text-cyan-600">Services</p></span>
            <p className=" sm:text-base italic text-sm">This are some of the services we offer</p>

            </div>

            <div id="hosting-service-div">
                {servicesMaper}
            </div>
                
            </div>  
        </>
    )
}