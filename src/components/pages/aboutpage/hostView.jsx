const linkGenerate = social => {
    if (social.site === 'facebook') {
        return <i className="fab fa-facebook tm-social-icon"></i>
    }

    if (social.site === 'instagram') {
        return <i className="fab fa-instagram tm-social-icon"></i>
    }

    if (social.site === 'linkedin') {
        return <i className="fab fa-linkedin tm-social-icon"></i>
    }

    if (social.site === 'github') {
        return <i className="fab fa-github tm-social-icon"></i>
    }

    return 
}

const socialView = (social) => {
    return <a
        href={social.link}
        className="tm-social-link me-1">
        {linkGenerate(social)}
    </a>

}

const HostView = ({host}) => {
    return (
        <article className="col-lg-6">
            <figure className="tm-person">
                <img src={host.src} alt={ host.name } className="img-fluid tm-person-img" />
                <figcaption className="tm-person-description">
                    <h4 className="tm-person-name">{ host.name }</h4>
                    <p className="tm-person-title">{ host.post }</p>
                    <p className="tm-person-about">{ host.text }</p>
                    <div>
                        {host.social.map(social => {
                            return socialView(social)
                        })}
                    </div>
                </figcaption>
            </figure>
        </article>
    )
}

export default HostView