import React from 'react'



const Gallery = ({ images }) => {
    return (
        <div className="card m-2 me-auto" style={{width: "18rem"}}>
            <img
                src={ images.src }
                className="card-img-top"
                style={{height:"12rem"}}
                alt="."
            />
            <div className="card-body">
                <p className="card-text tm-gallery-title">{images.tittle}</p>
                {images.price ? <p class="img-price">৳ {images.price}</p> : ''}
            </div>
        </div>
    )
}

export default Gallery