import { NavLink } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax';

import headerimage from './assests/img/n4.jpg'
import logo from './assests/logo.png'

const Header = () => {
    return (
        <div className="placeholder">
            <div className="parallax-window">
                <Parallax
                    blur={{min: -10, max: 10}}
                    className="parallax-window"
                    bgImage={headerimage}
                    bgImageAlt="the art"
                    strength={-210}
                >
                    <div style={{ height: '200px' }} />
                </Parallax>
                <div className="tm-header">
                    <div className="row tm-header-inner">
                        <div className="col-md-6 col-12">
                            <img src={ logo } alt="Logo" className="tm-site-logo" />
                            <div className="tm-site-text-box">
                                <h1 className="tm-site-title">Color Dreams</h1>
                                <h6 className="tm-site-description">welcome all art & painting lovers</h6>
                            </div>
                        </div>
                        <nav className="col-md-6 col-12 tm-nav">
                            <ul className="tm-nav-ul">
                                <li className="tm-nav-li">
                                    <NavLink
                                        to="/"
                                        className="tm-nav-link"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                
                                <li className="tm-nav-li">
                                    <NavLink
                                        to="/about"
                                        className="tm-nav-link"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                
                                <li className="tm-nav-li">
                                    <NavLink
                                        to="/contact"
                                        className="tm-nav-link"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header