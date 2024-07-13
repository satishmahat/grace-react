import Faqs from "./components/Faqs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";


function HomePage(){
    return(
        <>
            <Navbar/><br />
            <About/>
            <Services/>
            <Faqs/>
            <Contact/><br /><br />
            <Footer/>
        </>
    )
}
export default HomePage