import { useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { BiSolidPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";


import Home from './JSX/home.jsx'
import Services from './JSX/services';
import About from './JSX/about';
import Tracker from './JSX/traker';
import Review from './JSX/reviews';
import Contact from './JSX/contact';
import Footer from './JSX/footer';


function App() {
  const [count, setCount] = useState(0)
  const [NavState, setNavState] = useState(false)

  const navStyler = {
    display : NavState ? 'flex' : 'none'
  }

  function ShowNav () {
    setNavState((e) => !e)
  }

  function Big() {
    setNavState(true)
  }
  window.addEventListener('resize', function() {
    if(this.screen.width >= 780) {
      Big()
    }
  })

  window.addEventListener('loadeddata', function () {
    if(screen.width >= 780) {
      Big()
      console.log('big')
    }
  })
  useLayoutEffect(  () => {
    if(screen.width >= 780) {
      Big()
      console.log('big')
    }
  },[])

window.addEventListener('load', function () {
  if(screen.width >= 780) {
    Big()
    console.log('big')
  }
})
let mybutton = document.getElementById("arrowNav");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "block";
  }
}

  return (
    <>
    
    <div className=' bg-slate-200' id='owning-header-div'>{/* owning header div */}
      <div className=' text-base  font-semibold text-slate-200 bg-sky-900' id='upper-header-div'>{/* uper header div */}
        <span><BiSolidPhone className=' rounded-sm   bg-slate-200 text-cyan-700' /><p className=' ' >{import.meta.env.VITE_Number}</p></span>
        <span> <MdOutlineEmail className=' rounded-sm   bg-slate-200 text-cyan-700'  /><p className=' ' >{import.meta.env.VITE_Email}</p></span>
        <span><FaLocationDot className=' rounded-sm   bg-slate-200 text-cyan-700' /><p className=' ' >{import.meta.env.VITE_Location}</p></span>
      </div>

      <div id='lower-heading-div'>{/* lower header div */}
          <span className=' font-semibold sm:text-2xl sm:font-semibold text-lg md:text-2xl text-slate-800'>Transporter</span>
          <div style={navStyler} id='lower-list-div'>
            <ul>
              <li className=' cursor-pointer focus:font-semibold  hover:text-cyan-800 focus:text-cyan-800' ><a href="#home">HOME</a></li>
              <li className=' cursor-pointer focus:font-semibold  hover:text-cyan-800 focus:text-cyan-800' ><a href="#services">SERVICES</a></li>
              <li className=' cursor-pointer focus:font-semibold  hover:text-cyan-800 focus:text-cyan-800' ><a href="#about">ABOUT</a></li>
              <li className=' cursor-pointer focus:font-semibold  hover:text-cyan-800 focus:text-cyan-800' ><a href="#tracker">TRACK ORDER</a></li>
              <li className=' cursor-pointer focus:font-semibold  hover:text-cyan-800 focus:text-cyan-800' ><a href="#reviews">REVIEWS</a></li>
              <li className=' cursor-pointer focus:font-semibold  hover:text-cyan-800 focus:text-cyan-800' ><a href="#contact">CONTACT US</a></li>
              <li className=' cursor-pointer focus:font-semibold  hover:text-cyan-800 focus:text-cyan-800' ><a href="#footer">BRIEF</a></li>

            </ul>
          </div>
          <span  id='ham-div'>

            {!NavState ?
              <GiHamburgerMenu className=' ' onClick={() => setNavState((e) => !e)} size={25} />
            : <MdCancel className=' bg-slate-800 rounded-full text-slate-200'  onClick={() => setNavState((e) => !e)} size={25} />
            }
            </span>
      
      </div>


    </div>

    <div id='home'>{/* home div */}
            <Home />
    </div>

    <div id='services'>{/* service div */}
            <Services />
    </div>

    <div id='about'>{/* about div */}

            <About />
    </div>

    <div id='tracker' className=' bg-slate-200'>{/* track div */}
            <Tracker />
    </div>

    <div id='reviews'>{/* review div */}
            <Review />
    </div>

    <div id='contact'>{/* review div */}
            <Contact />

    </div>


    <div id='footer'>{/* footer div */}
            <Footer />

             
    </div>

      <div id='arrowNav'>
        <a  href='#owning-header-div' className='-mt-[6%]  bg-sky-800 rounded-md p-1 float-right w-7 h-7 text-center justify-center align-middle flex text-base'><FaArrowUp size={20} /></a>
    
      </div>
      
  
    
    </>
  )
}

export default App
