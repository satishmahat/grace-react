import './about.css'
import logo from './images/logo.png';

function About(){
    return(
        <>
        <div className="about-us">
            <div className="about">
                <img src={logo} className="pic" />
                <div className="text">
                    <h2>About Us</h2>
                     <h4>  <img src={logo} className="small-pic" /> Grace Dental Care</h4>
                    <p>Welcome to a place where your smile’s journey begins! We fuse cutting-edge dental technology with a gentle touch, creating a perfect harmony of comfort and innovation. Our mission is to transform every visit into a positive experience, ensuring your oral health and radiant smile are always at their best. Discover the difference, where exceptional care meets extraordinary results. Join us and experience the future of dental care today!</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default About