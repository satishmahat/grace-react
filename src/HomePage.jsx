import Faqs from "./components/Faqs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";


function HomePage(){
    return(
        <>
            <Navbar/><br />
            <Services/>
            <Faqs/>
            <Contact/><br /><br />
            <Footer/>
        </>
    )
}
export default HomePage