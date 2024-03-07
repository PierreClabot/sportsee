function CardUserData(props){
    if(!props){
        return null
    }
    return(
        <div className="card">
            <div className={"icone "+props.type.toLowerCase()}>
                <img src={props.img} alt="icone" />
            </div>
            <div className="info">
                <div className="count">{props.count}</div>
                <div className="type">{props.type}</div>
            </div>
        </div>
    )
}

export default CardUserData