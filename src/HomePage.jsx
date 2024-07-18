import Faqs from "./components/Faqs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Landing from "./components/Landing";


function HomePage(){
    return(
        <>
            <Navbar/>
            <Landing/><br />
            <About/>
            <Services/>
            <Faqs/>
            <Contact/><br /><br />
            <Footer/>
        </>
    )
}
export default HomePage