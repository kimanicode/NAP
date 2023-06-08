import React ,{useState} from 'react'
import { HiMenuAlt3 ,HiX} from "react-icons/hi";
import Logo from '../assets/nawiri.png'

const Header = ()=>{

    const [nav ,setNav] = useState(false)
  

    function handleLinkClick() {
      setNav(false);
    }

    function handleClick(){
      setNav(!nav)
   }

    return (
        
        <div className=' bg-slate-200 py-3 px-8 h-14 sticky top-0 z-10  w-full'>
            <div className='flex justify-between items-center '>
            <div className='h-full flex '>
                     <p className='text-marian font-bold mr-4 text-3xl hover:text-3xl sm:text-4xl'> Naw<span className='text-xan'>i</span>ri</p>
                    {/* <img src ={Logo} className='h-full' /> */}
               
            </div>
            <ul className='justify-between hidden md:flex'>
                <li className='px-3  cursor-pointer border-2 border-b-xan text-marian'>Home</li>
                <li className='px-3  cursor-pointer text-marian'>About Us</li>
                <li className='px-3  cursor-pointer text-marian'>Services</li>
                <li className='px-3 cursor-pointer text-marian'>Blog</li>
                <li className='px-2  cursor-pointer text-marian'>Contact Us</li>
            </ul>

            <div  className='md:hidden py-2 ' onClick={handleClick}>
               {!nav ? <HiMenuAlt3 className='w-10 h-10 '/>: <HiX className='w-10 h-10'/>} 
        </div>
        </div>

        {nav &&         
            <ul className='px-8  inline-block bg-slate-200  w-full flex flex-col '>

                <li className='py-2  cursor-pointer border-2 border-b-xan text-marian'>Home</li>
                <li className='py-2  cursor-pointer text-marian'>About Us</li>
                <li className='py-2  cursor-pointer text-marian'>Services</li>
                <li className='py-2 cursor-pointer text-marian'>Blog</li>
                <li className='py-2  cursor-pointer text-marian'>Contact Us</li>
            
            </ul>

        
            
            
        }



        </div>
    )
}

export default Header;