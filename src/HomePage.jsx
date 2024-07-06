import Faqs from "./components/Faqs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function HomePage(){
    return(
        <>
            <Navbar/><br /><br />
            <Faqs/><br /><br />
            <Contact/><br /><br />
            <Footer/>
        </>
    )
}
export default HomePage