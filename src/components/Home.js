import React from 'react'
import bannerImg from '../assets/irewolede-PvwdlXqo85k-unsplash.jpg' 

const Home = ()=>{

    return (
        <div className='bg-slate-200 flex h-screen px-8 md:flex-row flex-col py-5 w-full '>
            <div className='basis-1/2 flex flex-col md:py-6 my-3'>

                <h1 className='text-xan font-bold md:text-6xl  py-3'>Cultivate Success <br/> With Us.</h1>
                <p className=' md:py-6'>
                   Nawiri Agricultural Programme provides innovative    solutions to challenges <br/> facing agriculture,     mitigation and adaptation to climate change
                </p>
                <button className=' rounded-full  hover:bg-xan bg-marian text-white px-3 py-3  text-center md:w-[250px] w-[150px] md:mt-6'>Learn More </button>
                
            </div>

            <div className='h-full basis-1/2 md:p-5 '>
                <img src={bannerImg} className= ' h-3/4  md:m-5 rounded-2xl' />

            </div>



        </div>
    )
}

export default Home;