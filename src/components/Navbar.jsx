import { Link, Outlet } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbarstyle.scss'
import { useState } from "react";

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
    
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    } 

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? "navheader navheader-bg" : "navheader"} id="header">
            <h2 className="nav__logo"><Link to="/"><span className="logo-half">&lt;&#47;UCHE</span><span className="logo">NNA&gt;</span></Link></h2>
            <nav className="nav bd-container">
                <div className="nav__menu" id="nav-menu">

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav__item" >
                            <Link to="/" className="nav__link active-link">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/about" className="nav__link">About</Link>
                        </li>
                        <li className="nav__item" >
                            <Link to="/project" className="nav__link">Project</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/contact" className="nav__link">Contact</Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/customhook" className="nav__link">Fetch Data</Link>
                        </li>

                        <li><i className='bx bx-moon change-theme' id="theme-button"></i></li>
                    </ul>
                </div>
            </nav>
            <div className="nav__toggle hamburger" id="nav-toggle" onClick={handleClick}>
                {click ? (<FaTimes size={20} />) : (<FaBars size={20} />)}
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar
