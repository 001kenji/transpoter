import React from "react";
import { useForm } from "react-hook-form";
import '../CSS/contact.css'

export default Contact 
function Contact()  {

    const {register, handleSubmit, formState} = useForm({
        defaultValues : {
            name : '',
            number : '',
            email : '',
            Message : ""
        },
        mode : 'onTouched'
    })
    const {errors,isSubmitting} = formState

    function  SubFunction(data) {
        console.log(data)
    }
    let map;

    


    return (
        <>
    
        <div className=" bg-slate-400" id="owning-contact-div">{/* owning contact div */}
            <span className=" text-2xl sm:text-4xl font-semibold font-serif flex flex-row gap-4">Contact <p className=" text-cyan-800">Us</p></span>
        <div id="form-contact-div">{/* form contact div */}

            <form  id="Contact-form" onSubmit={handleSubmit(SubFunction)} noValidate>
                <input className=" sm:placeholder:text-lg text-lg placeholder:text-slate-200 text-slate-200 " placeholder="Your Name" {...register('name', {
                    minLength : {
                        value : 5,
                        message : 'enter more characters'
,
                    },
                    required : 'enter name'
                })} type="text" />
                {errors.name && <p className=" sm:text-lg text-red-600 rounded-sm font-semibold text-lg bg-slate-800 p-1 w-full " id="error">{errors.name?.message}</p>}
                <input className=" sm:placeholder:text-lg text-lg placeholder:text-slate-200 text-slate-200 " placeholder="Phone Number" {...register('number', {
                    required : 'enter phone number',
                    minLength : {
                        value : 10,
                        message : 'enter full number'
                    }
                })} type="number" />
                {errors.number && <p className=" sm:text-lg text-red-600 rounded-sm font-semibold text-lg bg-slate-800 p-1 w-full " id="error">{errors.number?.message}</p>}

                <input className=" sm:placeholder:text-lg text-lg text-ellipsis placeholder:text-slate-200 text-slate-200 " placeholder="Email" {...register('email', {
                    required : 'enter email',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                      }
                })} type="email" />
                {errors.email && <p className=" sm:text-lg text-red-600 rounded-sm font-semibold text-lg bg-slate-800 p-1 w-full " id="error">{errors.email?.message}</p>}

                <textarea className=" sm:placeholder:text-lg placeholder:text-slate-200 text-slate-200 " placeholder="Message" {...register('Message',{
                required : 'enter message '
                })} ></textarea>
                {errors.Message && <p className=" sm:text-lg text-red-600 rounded-sm font-semibold text-lg bg-slate-800 p-1 w-full " id="error">{errors.Message?.message}</p>}

                <button className=" font-semibold text-lg p-1 w-24 sm:p-2 sm:text-lg  mx-auto rounded-sm  bg-cyan-700 " type="submit">SEND</button>
            </form>

        </div>

        </div>
        
        
        </>
    )
}