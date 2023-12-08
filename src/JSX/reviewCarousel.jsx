import React, { useState } from 'react'

import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { PiQuotesFill } from "react-icons/pi";

import '../CSS/reviews.css'
export function CarouselData() {
   const reviewData = [
      {
        "name": "Alice Johnson",
        "occupation": "Software Engineer",
        "reviews": [
          "Excellent service! The transportation was punctual and comfortable. I highly recommend it.",
          "Efficient and reliable transportation. The drivers were courteous, and the vehicles were well-maintained."
        ]
      },
      {
        "name": "Bob Smith",
        "occupation": "Graphic Designer",
        "reviews": [
          "The transportation service exceeded my expectations. Timely and professional.",
          "Smooth rides every time. I appreciate the attention to detail and customer satisfaction."
        ]
      },
      {
        "name": "Charlie Davis",
        "occupation": "Marketing Specialist",
        "reviews": [
          "Impressed with the transportation quality. Clean vehicles and friendly staff.",
          "The transportation service made my commute stress-free. I'm a satisfied customer."
        ]
      },
      {
        "name": "David Brown",
        "occupation": "Data Scientist",
        "reviews": [
          "Reliable transportation that I can count on. A great choice for daily commuting.",
          "The transportation service's efficiency aligns perfectly with my schedule. Top-notch experience."
        ]
      },
      {
        "name": "Eva Miller",
        "occupation": "Product Manager",
        "reviews": [
          "Top-tier transportation service! Always on time and comfortable.",
          "I've had a consistently positive experience with this transportation service. Highly recommended."
        ]
      },
      {
        "name": "Frank White",
        "occupation": "Financial Analyst",
        "reviews": [
          "The transportation service is a game-changer. Punctual and cost-effective.",
          "As a frequent user, I can vouch for the reliability and professionalism of this transportation service."
        ]
      },
      {
        "name": "Grace Taylor",
        "occupation": "HR Consultant",
        "reviews": [
          "I rely on this transportation service for my daily commute. Dependable and hassle-free.",
          "The transportation service stands out for its commitment to customer satisfaction. A great choice for professionals."
        ]
      },
      {
        "name": "Henry Turner",
        "occupation": "Architect",
        "reviews": [
          "Impressive transportation service! Clean and spacious vehicles for a comfortable journey.",
          "The transportation service aligns with the precision and attention to detail I value in my work. Highly recommended."
        ]
      },
      {
        "name": "Ivy Adams",
        "occupation": "Event Planner",
        "reviews": [
          "Outstanding transportation service! They go the extra mile to ensure a smooth ride.",
          "I trust this transportation service for my event planning needs. Professional and reliable."
        ]
      },
      {
        "name": "Jack Turner",
        "occupation": "Travel Blogger",
        "reviews": [
          "As a travel blogger, I appreciate the seamless transportation service. A key part of my journeys.",
          "Reliable and efficient transportation is crucial for a travel blogger. This service never disappoints."
        ]
      }
    ]

   const slider = reviewData.map((details) => 
                 <div id="mapping-div" className=" w-full min-w-full  flex flex-col p-2">
                 <blockquote className=' sm:text-lg  p-2 bg-slate-900 rounded-sm text-slate-300 w-full break-words '><PiQuotesFill className=' rotate-180 text-amber-400' size={20} />{details.reviews}<PiQuotesFill  className='  text-amber-400' size={20} /></blockquote>
                 <span className=' sm:text-lg italic font-mono text-base'>{details.occupation}</span>
                 <big className=' sm:text-3xl font-serif' >{details.name}</big>
                 </div>
               
               )
   
               let [current,setcurrent] = useState(0)
               let Prev = () => {
                  if(current ===0){
                     setcurrent(reviewData.length - 1)
                  }
                  else {
                     setcurrent(current - 1)
                  }
               }
               let Next = () => {
                  if(current ===reviewData.length - 1){
                     setcurrent( 0)
                  }
                  else {
                     setcurrent(current + 1)
                  }
               }

         const circles = reviewData.map((s,i) => 
      
         <div>
            <div id='cirlces'
            onClick={() => setcurrent(i)}
         key={"circle" + i}
         className={` ${i == current ? "bg-slate-800" : "bg-cyan-700"}   rounded-full w-3 h-3 sm:w-5 sm:h-5 hover:bg-slate-800 focus:bg-slate-800 bg-cyan-700` }>
            
         </div>
         </div>
     
      )       
               
   return (
           <>
               <div className=' overflow-hidden' >
                  <div style={{transform: `translateX(-${current * 100}%)`}} id='slides' className= "   transition ease-in-out duration-500 relative  pt-4 w-[100%] m-auto">{slider}</div>
                  <div className=' p-4 w-full gap-5 flex flex-row justify-around'>
                    {circles}
                     </div> 
                  <div className='flex flex-row gap-4   justify-around'> 
                        <button onClick={Prev}>
                        <FaAngleDoubleLeft className=" hover:text-slate-700 hover:bg-cyan-700 focus:text-slate-700 focus:bg-cyan-700  text-slate-300 bg-slate-950 rounded-sm bg-opacity-50"  size={40}  />

                        </button>
                        <button onClick={Next}>
                        <FaAngleDoubleRight className=" hover:text-slate-700 hover:bg-cyan-700 focus:text-slate-700 focus:bg-cyan-700  text-slate-300 bg-slate-950 rounded-sm bg-opacity-50" size={40} />
                        </button> 
                                            
                  </div>
               </div>
           </>
   )
}