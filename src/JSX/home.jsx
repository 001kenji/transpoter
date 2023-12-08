import React, { useState } from "react";


import '../CSS/home.css'
import { FaDotCircle } from "react-icons/fa";

export default Home 

function Home () {
const Content = [
    {
        title : 'WE PROVIDE BEST',
        added : 'TRANSPORT SERVICE',
        desctiption : 'We offer a robust network of trucks and drivers, ensuring seamless nationwide transportation of your goods.',
        quote : 'The road is long, but the company is good.'
    },
    {
        title : 'PERSONALIZED SERVICES',
        added : 'DEDICATED TO YOU',
        desctiption : 'Dedicated account managers cater to your specific needs, providing customized solutions and 24/7 support.',
        quote : 'The journey is often more important than the destination.'
    },
    {
        title : 'ADVANCED TECHNOLOGY',
        added : 'CLEAR AND ACCURATE',
        desctiption : 'Receive instant updates on the status of your cargo, providing peace of mind and transparency throughout the journey.',
        quote : 'There are no shortcuts to any place worth going.'
    }
]
const [showQuote1, setquote1] = useState(true)
const quoteStyle1 = {
    display : showQuote1 ?'flex' : 'none'
}
const [showQuote2, setquote2] = useState(true)
const quoteStyle2 = {
    display : showQuote2 ?'flex' : 'none'
}
const [showQuote3, setquote3] = useState(true)
const quoteStyle3 = {
    display : showQuote3 ?'flex' : 'none'
}

function ContentMover(props) {
     var slide = document.getElementById('content-home-div')
    var currentIndex = slide.clientWidth;
    var index;
    if(props == 'center') {
        index = currentIndex/2 + 180
        slide.scrollBy(index,0)
        //slide.style.justifyContent = 'center'
    }
    else if(props == 'left') {
        index = currentIndex + 1250
       slide.scrollBy(-index,0)
       //slide.style.justifyContent = 'none'

    }
    else if(props == 'right') {
        index = currentIndex + 1250
        slide.scrollBy(index,0)
    }
    
}


const contentMapper = Content.map((details,index) => 
    <div className=" text-slate-200 " id="mapping-content-div">
        <big>{details.title}</big>
        <big>{details.added}</big>
        
        <textarea  disabled>{details.desctiption}</textarea>
        <small >{details.quote}</small>

        <button  className="focus:text-lime-500 focus:bg-slate-950 bg-lime-500 text-slate-950 font-semibold p-1">Get Info</button>
    </div>
    )
    return  (
        <>
        
        <div id="owning-home-div">{/* owning home div */}
        <div id="home-bg-div" className="bg-slate-800 rounded-sm bg-opacity-50">
            <div id="content-home-div">{/* animating  home content div */}
                {contentMapper}
            </div>
            <div id='navigator-home-div' className=" align-middle justify-center text-center">
                <FaDotCircle onClick={() => ContentMover('left')} className=" bg-cyan-900 rounded-full text-slate-100 hover:text-cyan-900 hover:bg-slate-100 focus:bg-slate-100 focus:text-cyan-900" size={20} />
                <FaDotCircle onClick={() => ContentMover('center')} className=" bg-cyan-900 rounded-full text-slate-100 hover:text-cyan-900 hover:bg-slate-100 focus:bg-slate-100 focus:text-cyan-900" size={20} />
                <FaDotCircle onClick={() => ContentMover('right')} className=" bg-cyan-900 rounded-full text-slate-100 hover:text-cyan-900 hover:bg-slate-100 focus:bg-slate-100 focus:text-cyan-900" size={20} />
            
            
            </div>
        </div>
            
        </div>
        
        </>
    )
}