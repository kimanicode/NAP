import { useEffect,useState } from "react";
import Home from "./components/Home";
import Header from './components/Header'
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Video from "./components/Video";
import {BrowserRouter as Router ,Switch, Route, Routes } from 'react-router-dom'
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Services from "./pages/Services";



let lastScrollPos = 0;


function App() {

  const [showHeader, setShowHeader] = useState(true);
  let timeoutRef = null;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutRef);
    };
  }, []);

  const handleScroll = () => {
    clearTimeout(timeoutRef);

    timeoutRef = setTimeout(() => {
      const currentScrollPos = window.pageYOffset;
      const show = currentScrollPos <= 0 || currentScrollPos < lastScrollPos;
      setShowHeader(show);
    }, 10); // Adjust the delay (in milliseconds) as needed
  };


  return (

    <Router>

     {showHeader && <Header />}
      <Routes>
        
        <Route path="/" element ={<><Home />
        <Testimonials />
        <Video /></>} />

        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        
        
        
        
      </Routes>
      <Footer/>
     </Router>

  );
}

export default App;
