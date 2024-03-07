import logo from './../../assets/logo.svg'

function HorizontalMenu(){
    return(
        <header>
            <img className="logo" src={logo} alt="Logo SportSee" />
            <div className="menu">
                <div className="link_header">Accueil</div>
                <div className="link_header">Profil</div>
                <div className="link_header">Réglages</div>
                <div className="link_header">Communauté</div>
            </div>
            
        </header>
    )
}

export default HorizontalMenu