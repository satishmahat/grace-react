import Faqs from "./components/Faqs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Landing from "./components/Landing";
import Dentalfacts from "./components/Dentalfacts";
import TestimonialSlider from "./components/Testimonials";
import Message from "./components/Message";
import Whygrace from "./components/Whygarce";


function HomePage(){
    return(
        <>
            <Navbar/>
            <Landing/><br /><br />
            <About/><br />
            <Whygrace/>
            <Message/><br /><br /><br />
            <Services/><br /><br /><br />
            <TestimonialSlider/>
            <Faqs/>
            <Dentalfacts/><br /><br />
            <Contact/><br /><br />
            <Footer/>
        </>
    )
}
export default HomePage