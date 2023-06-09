import React ,{useState} from 'react'
import { HiMenuAlt3 ,HiX} from "react-icons/hi";
import Logo from '../assets/nawiri.png'


import{ Link, useLocation} from 'react-router-dom'

const Header = ()=>{
    const location = useLocation();

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
                     <Link to='/'><p className='text-marian font-bold mr-4 text-3xl hover:animate-bounce sm:text-4xl'> Naw<span className='text-xan'>i</span>ri</p> </Link>
                    {/* <img src ={Logo} className='h-full' /> */}
               
            </div>
            <ul className='justify-between hidden md:flex'>

            <Link to="/">
          <li className={`${location.pathname === '/' ? ' border-2 border-b-xan px-3 cursor-pointer  text-marian' : 'px-3 cursor-pointer  text-marian'}`}>Home</li>
        </Link>

            <Link to="/about-us">
                <li className={`${location.pathname === '/about-us' ? ' border-2  border-b-xan px-3 cursor-pointer  text-marian' : 'px-3 cursor-pointer  text-marian'}`}>About Us</li>
            </Link>
                
            <Link to="/services">
                <li className={`${location.pathname === '/services' ? 'border-2 border-b-xan px-3 cursor-pointer  text-marian' : 'px-3 cursor-pointer  text-marian'}`}>Services</li>
            </Link>

           

            <Link to="/blog">
                <li className={`${location.pathname === '/blog' ?  ' border-2 border-b-xan px-3 cursor-pointer  text-marian' : 'px-3 cursor-pointer  text-marian'}`}>Blog</li>
            </Link>
                
                <Link to="/contact-us">
                <li className={`${location.pathname === '/contact-us' ? 'border-2 border-b-xan px-3 cursor-pointer  text-marian' : 'px-3 cursor-pointer  text-marian'}`}>Contact Us</li>
            </Link>
            </ul>

            <div  className='md:hidden py-2  ' onClick={handleClick}>
               {!nav ? <HiMenuAlt3 className='w-10 h-10 text-marian'/>: <HiX className='w-10 h-10 text-marian'/>} 
        </div>
        </div>

        {nav &&         
            <ul className='px-8  inline-block bg-slate-200  w-full flex flex-col '>

                    <Link to='/' onClick={handleLinkClick}><li className='py-3  cursor-pointer  text-marian'>Home</li></Link>

                    <Link to='/about-us' onClick={handleLinkClick}><li className='py-3  cursor-pointer text-marian'>About Us</li>
                    </Link>

                    <Link to='/services' onClick={handleLinkClick}
                    >
                        <li className='py-3 cursor-pointer text-marian'>Services</li>
                    </Link>



                    <Link to='/blog' onClick={handleLinkClick}>
                        <li className='py-3 cursor-pointer text-marian'>Blog</li>
                    </Link>

                    <Link to='/contact-us' onClick={handleLinkClick}><li className='py-2  cursor-pointer text-marian'>Contact Us</li></Link>
            
            </ul>

        
            
            
        }



        </div>
    )
}

export default Header;