import React , {useState,useEffect} from "react";
import {BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill,BsQuote} from "react-icons/bs";


 const Testimonials =() =>{

    const [feedBack , setFeedBack] = useState([])

    

    useEffect(()=>{
        fetch("/api/feedback")
            .then(response => response.json())
            .then(data => setFeedBack(data.feedback))
            .catch(err=> console.log("Error fetching data", err))
    },[])






    return (
        <div className="w-full bg-xan  py-4"> 
        <p className="text-center text-white text-4xl py-3">What Our Clients Are Saying</p>
        <div className="flex justify-center items-center py-4">

            <div>
                <button><BsFillArrowLeftSquareFill className="text-white text-4xl animate-bounce "/></button>
            </div>

           
            <div className="flex  md:flex-row flex-col "> 
            {feedBack.map(testimonial => (
                  <div className="p-3  ">
                 
                  <div className=" w-full h-full  basis-1/2 flex   flex-col   p-3 justify-center bg-white mx-4 items-center rounded-lg " key={testimonial.id} >

                    <p><BsQuote className="text-xan text-6xl"/></p>

                    <p className="italic text-center py-2">
                        {testimonial.comment}
                  

                    </p>

                    <p className="font-bold ">
                        {testimonial.name}

                    </p>

                    <span className="italic">{testimonial.city}</span>




                    </div>


                  </div>
                ))}

       </div>
    



            
            <div>
            <button><BsFillArrowRightSquareFill  className="text-white text-4xl animate-bounce  " /></button>
            </div>





        </div>


        </div>
    )

}

export default Testimonials ;