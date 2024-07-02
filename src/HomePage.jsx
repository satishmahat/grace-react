import Faqs from "./components/Faqs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function HomePage(){
    return(
        <>
            <Navbar/><br /><br />
            <Faqs/><br /><br />
            <Footer/>
        </>
    )
}
export default HomePage