import React from "react";
import {BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill,BsQuote} from "react-icons/bs";


 const Testimonials =() =>{
    return (
        <div className="w-full bg-xan  py-4"> 
        <p className="text-center text-white text-4xl py-3">What Our Clients Are Saying</p>
        <div className="flex justify-center items-center py-4">

            <div>
                <button><BsFillArrowLeftSquareFill className="text-white text-4xl animate-bounce "/></button>
            </div>
            <div className="basis-2/4 flex flex-col p-3 justify-center bg-white mx-4 items-center rounded-lg " >

                <p><BsQuote className="text-xan text-6xl"/></p>

                <p className="italic py-2">
                The program provided me with access to improved seeds, fertilizers, and other inputs, which has helped me to increase my crop yields by 20%

                </p>

                <p className="font-bold ">
                    Kimani Karaba 
                    
                </p>

                <span className="italic">Nairobi</span>




            </div>
            <div>
            <button><BsFillArrowRightSquareFill  className="text-white text-4xl animate-bounce  " /></button>
            </div>





        </div>


        </div>
    )

}

export default Testimonials ;