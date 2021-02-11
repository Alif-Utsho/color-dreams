import React from 'react'



const Gallery = ({ images }) => {
    return (
        <div className="card m-2" style={{width: "16rem"}}>
            <img
                src={ images.src }
                className="card-img-top"
                // style={{height:"12rem"}}
                alt="."
            />
            <div className="card-body">
                <p className="card-text">{ images.tittle }</p>
            </div>
        </div>
    )
}

export default Gallery