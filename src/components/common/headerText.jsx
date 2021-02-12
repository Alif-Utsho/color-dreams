
const HeaderText = ({headerText}) => {
    return (
        <>
            <header className="row tm-welcome-section">
                <h2 className="col-12 text-center tm-section-title">
                    {headerText.tittle}    
                </h2>
                <p className="col-12 text-center">
                    {headerText.text}
                </p>
            </header>
        </>
    )
}

export default HeaderText