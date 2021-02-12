
const Contacts = () => {
    return (
        <>
            <header class="row tm-welcome-section">
                <h2 class="col-12 text-center tm-section-title">Feel free to Contact</h2>
            </header>

            <div class="tm-container-inner-2 tm-contact-section">
                <div class="row">
                    <div class="col-md-6">
                        <form action="" method="POST" class="tm-contact-form">
                            <div class="form-group">
                                <input type="text" name="name" class="form-control" placeholder="Name" required="" />
                            </div>

                            <div class="form-group">
                                <input type="email" name="email" class="form-control" placeholder="Email" required="" />
                            </div>

                            <div class="form-group">
                                <textarea rows="5" name="message" class="form-control" placeholder="Message" required=""></textarea>
                            </div>

                            <div class="form-group tm-d-flex">
                                <button type="button" class="tm-btn tm-btn-success tm-btn-right">
                                    Send
					          </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div class="tm-address-box">
                            <h4 class="tm-info-title tm-text-success">Our Address</h4>
                            <address>
                                1205 Dhaka, Bangladesh    
                            </address>
                            <a href="tel:+8801770900478" class="tm-contact-link">
                                <i class="fas fa-phone tm-contact-icon"></i>+8801770900478
							</a>
                            <a href="mailto:ashahriar29@gmail.com" class="tm-contact-link">
                                <i class="fas fa-envelope tm-contact-icon"></i>ashahriar29@gmail.com
							</a>
                            <div class="tm-contact-social">
                                <a href="https://www.facebook.com/colordreams52" class="tm-social-link me-1"><i class="fab fa-facebook tm-social-icon"></i></a>
                                <a href="" class="tm-social-link me-1"><i class="fab fa-twitter tm-social-icon"></i></a>
                                <a href="" class="tm-social-link me-1"><i class="fab fa-instagram tm-social-icon"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="tm-container-inner-2 tm-map-section">
                        <div class="row">
                            <div class="col-12">
                                <div class="tm-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.984280579359!2d90.37921851967576!3d23.74850049855001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b184334c7f%3A0x41b9887183d118e!2sMirpur%20Rd%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1613168695997!5m2!1sen!2sbd"
                                        frameborder="0"
                                        style={{ border: 0 }}
                                        allowfullscreen=""
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contacts