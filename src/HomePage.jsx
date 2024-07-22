import Faqs from "./components/Faqs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Landing from "./components/Landing";
import Dentalfacts from "./components/Dentalfacts";


function HomePage(){
    return(
        <>
            <Navbar/>
            <Landing/><br /><br />
            <About/>
            <Dentalfacts/><br /><br />
            <Services/>
            <Faqs/>
            <Contact/><br /><br />
            <Footer/>
        </>
    )
}
export default HomePage