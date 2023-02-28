import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
import './footerstyle.scss'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="left">
                    <p><FaHome size={18} /> Eneka Rumuowa Port Harcourt Rivers State</p>
                    <p><a href="tel:+2347062725781"><FaPhone size={18} /> &nbsp; 07062725781</a></p>
                    <p><a href="mailto:martinsanya19@gmail.com"><FaMailBulk size={18} /> &nbsp; martinsanya19@gmail.com</a></p>

                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor suscipit minima sunt?</p>
                    <Link to='/'><FaFacebook /></Link> <Link to='/'><FaTwitter /></Link><Link to='/'><FaLinkedinIn /></Link><Link to='/'><FaGithub /></Link>
                </div>
            </footer>
        </>
    )
}

export default Footer