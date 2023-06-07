import React from 'react'
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";


const Footer = () =>{

    return(
        <div className='bg-marian flex justify-between p-8  text-white w-full flex-col md:flex-row'>
            <div className=' md:basis-1/3 basis-full '>
                <h3 className='text-3xl  sm:text-4xl py-2 font-bold text-white'>
                    Nawiri Agricultural Programme

                </h3>
                <p className= 'py-2'>
                Our Mission is to empower farmers produce quality agricultural products using improved production, value addition & marketing innovations for multiple benefit.
                </p>
                <p className='text-xan'>
                © 2023 Nawiri Agricultural Programme. All rights reserved.
                </p>
            </div>
            <div className='md:basis-1/4 px-2 basis-full'>

                <h3 className='border-b-2 border-y-xan'>Who We Are</h3>
                <ul>
                    <li className='p-2'>About Us</li>
                    <li className='p-2'>Our Partners</li>
                    <li className='p-2'>Meet The Team</li>
                    
                    
                </ul>
            </div>
            <div className='md:basis-1/4 px-2 basis-full'>

                <h3 className='border-b-2 border-y-xan'>Work With Us</h3>

                <ul>
                    <li className='p-2'>Become Partner</li>
                    <li className='p-2'>Careers</li>
                    
                    
                    
                </ul>
            </div>
            <div className='md:basis-1/4 px-2 basis-full'>

                <h3 className='border-b-2 border-y-xan'>Contact Us</h3>
                <p className='p-2'>info@nawiri.co.ke</p>
                <p className='p-2'>+254 000 0000</p>
                <div>
                    <h3> Connect With Us</h3>
                    <div className='border-b-2 border-y-xan'>
                        

                    </div>
                    <div className='p-2 flex '>
                        <BsFacebook  className='m-3'/>
                        <BsTwitter  className='m-3'/>
                        <BsInstagram className='m-3' />
                        </div>

                </div>
            </div>
             
        </div>

    );
}

export default Footer;