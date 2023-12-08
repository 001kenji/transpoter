import React from "react";
import '../CSS/about.css'

import aboutImg from '../assets/images/about-img.jpg'
export default About 

function About()  {

    return (
        <>
        
        <div className=" bg-slate-200" id="owning-about-div">{/* owning div */}
            <div id="content-about-div">{/* content div */}
                <span className=" text-slate-900 ">About <p className=" text-cyan-800">Us</p></span>
                <blockquote className=" text-center">
                        
                    At Transpoter company, we provide reliable and efficient transportation solutions, ensuring your goods arrive on time and damage-free. We offer flexible options to meet your unique needs, backed by a team of experienced professionals and cutting-edge technology.
                </blockquote>
                <button className=" text-slate-100 bg-cyan-700 rounded-sm p-2">Read More</button>
            </div>

            <div  id="img-about-div">{/* img div */}
                <span className=" bg-cyan-800"></span>
                <img src={aboutImg} alt="" />
            </div>
        </div>
        
        
        </>
    )
}