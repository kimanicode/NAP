import React from "react";
import pic from '../assets/irewolede-PvwdlXqo85k-unsplash.jpg' 
import pic2 from '../assets/tractor-g59e9d0641_1280.png' 

const AboutUs = ()=>{

    return(
        <div className="  bg-slate-200 w-full py-5">
            <div className="bg-xan py-20 text-white">
                <h1 className="text-center text-4xl font-bold">About Us</h1>

            </div>
            <div className=' flex  px-8 md:flex-row  md:h-screen flex-col py-5 w-full '>
            <div className='basis-1/2 flex flex-col md:py-6 py-5 md:my-3  items-center justify-center'>

                <h1 className='text-xan font-bold text-4xl md:text-6xl  py-3'>Our Mission</h1>
                <p className=' text-marian py-6'>
                Empowering stakeholders along agriculture value chain through knowledge sharing, resource mobilization and skill development for sustainable agricultural productivity in Africa.<br/> <br/>

                Through strategic partnerships and targeted programs, we enable farmers, organizations, and communities to access valuable insights, necessary resources, and capacity-building opportunities.<br/> <br/>
               
                Together, we are building a resilient and prosperous agricultural sector that contributes to food security, economic growth, and environmental sustainability.

                </p>
                
                
            </div>

            <div className='h-full basis-1/2 mt-3 md:p-5  md:py-16 py-5'>
                <img src={pic} className= ' h-auto   rounded-2xl w-full drop-shadow-2xl' />

            </div>
        </div>







        <div className=' flex  px-8 md:flex-row  md:h-screen flex-col py-5 w-full flex-col-reverse '>

        <div className='h-full basis-1/2 mt-3 md:p-5  md:py-10 py-5'>
                <img src={pic2} className= ' h-auto   rounded-2xl w-full drop-shadow-2xl' />

            </div>




            <div className='basis-1/2 flex flex-col md:py-6 py-3 md:my-3  items-center justify-center'>

                <h1 className='text-xan font-bold text-4xl md:text-6xl '>Our Vision</h1>


                




                <p className=' text-marian py-6'>
                Building a resilient and prosperous agricultural sector that contributes to food security, economic growth, and environmental sustainability through empowering stakeholders along the agriculture value chain in Africa.<br/><br/> By leveraging strategic partnerships, targeted programs, and providing access to valuable insights, necessary resources, and capacity-building opportunities, we enable farmers, organizations, and communities to achieve sustainable agricultural productivity.

                </p>
                
                
            </div>

            
        </div>
            
            

        </div>
    );
}

export default AboutUs;