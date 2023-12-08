import react from 'react'
import '../CSS/foooter.css'

import { BiSolidPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
export default Footer 
function Footer()  {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <>
            <div id='owning-footer-div' className=' align-middle content-center justify-center bg-slate-950'> {/* owning div */}
            <div className=' text-base flex flex-col sm:text-lg  font-semibold text-slate-200 ' >{/* uper header div */}
                <span className=' flex flex-row gap-2 align-middle p-2 '><BiSolidPhone className=' rounded-sm align-middle   bg-transparent text-cyan-700' /><p className=' ' >{import.meta.env.VITE_Number}</p></span>
                <span className=' flex flex-row gap-2 align-middle p-2 '> <MdOutlineEmail className=' rounded-sm   bg-transparent text-cyan-700'  /><p className=' ' >{import.meta.env.VITE_Email}</p></span>
                <span className=' flex flex-row gap-2 align-middle p-2 '> <FaLocationDot className=' rounded-sm   bg-transparent text-cyan-700' /><p className=' ' >{import.meta.env.VITE_Location}</p></span>
            </div>

                <div id='summery-footer-div' className=' p-2 text-slate-300'> {/* summery info div */}
                    <blockquote className=' text-center'>
                            
                        Transporter Company delivers your goods swiftly and safely, anywhere in the world. We offer competitive rates and reliable service, making us your trusted choice for all your transportation needs.
                    </blockquote>
                </div>

                


            </div>
            <div className='bg-slate-900 sm:text-lg text-center text-base font-semibold  text-slate-100 relative mb-0'>
                    <span>All Rights Reserved  &#169; {year}. Designed by Brian Njuguna</span>
                </div>
        </>
    )
}