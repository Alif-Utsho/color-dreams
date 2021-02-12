

const Details = ({details}) => {
    return (
        <div class="tm-section tm-container-inner mt-5">
            <div class="row">
                <div class="col-md-6">
                    <figure class="tm-description-figure">
                        <img
                            src={details.src}
                            alt="Image"
                            class="img-fluid m-2"
                            style={{height:'15rem'},{width:'20rem'}}
                        />
                    </figure>
                </div>
                <div class="col-md-6">
                    <div class="tm-description-box">
                        <h4 class="tm-gallery-title">{details.tittle}</h4>
                        <p class="tm-mb-45">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi repellat voluptatem laboriosam sit quis sed repudiandae voluptatum quidem, nulla exercitationem quasi adipisci aspernatur minus earum esse explicabo reiciendis! Impedit? Thank you.</p>
                        <a href="/about" class="tm-btn tm-btn-default tm-right">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details