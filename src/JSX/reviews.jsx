import React from "react";
import '../CSS/reviews.css'

import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";


import trial1 from '../assets/images/slider-bg.jpg'
import trial2 from '../assets/images/track-bg.jpg'

export default Review 
import { CarouselData } from "./reviewCarousel";

function Review()  {
    

  

   
    return(

        <>
            <div className=" bg-slate-800" id="onwning-review-div"> {/* owning div */}

            <div id="heading-review-div"> {/* heading div */}
                <span className="sm:text-3xl text-slate-100">What Says Our <p className=" font-semibold text-cyan-700">Client</p></span>
            </div>

            <div id="carousel-review-div"> {/* carousels div */}
                        <div className=" bg-slate-400" id="hosting-review-div">
                            
                            <CarouselData />
                                  

                        </div>
                      
              </div>


            

            </div>
        
        
        </>
    )
}