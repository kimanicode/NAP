import Home from "./components/Home";
import Header from './components/Header'
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Video from "./components/Video";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Testimonials />
      <Video />
      <Footer/>
    </div>
  );
}

export default App;
