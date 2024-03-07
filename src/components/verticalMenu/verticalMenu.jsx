import icone1 from "./../../assets/verticalMenu1.svg"
import icone2 from "./../../assets/verticalMenu2.svg"
import icone3 from "./../../assets/verticalMenu3.svg"
import icone4 from "./../../assets/verticalMenu4.svg"

function VerticalMenu(){
    return(
        <div className="verticalMenu">
            <div className="icones">
                <div className="item">
                    <img src={icone1} alt="icone" />
                </div>
                <div className="item">
                    <img src={icone2} alt="icone" />
                </div>
                <div className="item">
                    <img src={icone3} alt="icone" />
                </div>
                <div className="item">
                    <img src={icone4} alt="icone" />
                </div>
            </div>

            <div className="copyright">Copyright, SportSee 2020</div>
        </div>
    )
}

export default VerticalMenu