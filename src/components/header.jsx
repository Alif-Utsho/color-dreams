import { NavLink } from 'react-router-dom'
import headerimage from './assests/header-image.jpg'
import logo from './assests/logo.png'

const Header = () => {
    return (
        <div className="placeholder">
            <div className="parallax-window" data-parallax="scroll" data-image-src={ headerimage }>
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
                                <li className="tm-nav-li"><NavLink to="/" className="tm-nav-link active">Home</NavLink></li>
                                <li className="tm-nav-li"><NavLink to="/about" className="tm-nav-link">About</NavLink></li>
                                <li className="tm-nav-li"><NavLink to="/contact" className="tm-nav-link">Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header