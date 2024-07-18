import landingimg from "./images/grace-land.png"
import './landing.css'
function Landing(){
    return(
        <>
        <div className="landing-container">
            <div className="landing-image">
                <img src={landingimg} alt="LOADING"/>
            </div>
        </div>
        </>
    );
}
export default Landing