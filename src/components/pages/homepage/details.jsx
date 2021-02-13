import { NavLink } from "react-router-dom"


const Details = ({details}) => {
    return (
        <div className="tm-section tm-container-inner mt-5">
            <div className="row">
                <div className="col-md-6">
                    <figure className="tm-description-figure">
                        <img
                            src={details.src}
                            alt="Image"
                            className="img-fluid m-2"
                        />
                    </figure>
                </div>
                <div className="col-md-6">
                    <div className="tm-description-box">
                        <h4 className="tm-history-title">{details.tittle}</h4>
                        <p className="tm-mb-45">{details.text}</p>
                        <NavLink to="/about" className="tm-btn tm-btn-default tm-right">Read More</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details