import CardUserData from "../cardUserData/cardUserData";
import iconCalorie from "../../assets/iconeCalorie.svg" 
import iconProtein from "../../assets/iconeProtein.svg"
import iconCarbohydrate from "../../assets/iconCarbohydrate.svg"  
import iconLipid from "../../assets/iconLipid.svg"  

function UserData(props){
    if(!props.data){
        return null
    }

    return(
        <div className="userData">
            {Object.keys(props.data).map((key,index)=>{
                let text = "";
                let img;
                let count;
                switch(key){
                    case "calorieCount":
                        text = "Calories";
                        img = iconCalorie;
                        count = (props.data[key]/1000).toFixed(3) +"kCal"
                        break;
                    case "proteinCount":
                        text = "Proteines";
                        img = iconProtein;
                        count = props.data[key]+"g"
                        break;
                    case "carbohydrateCount":
                        text = "Glucides";
                        img = iconCarbohydrate;
                        count = props.data[key]+"g"
                        break;
                    case "lipidCount":
                        text = "Lipides";
                        img = iconLipid;
                        count = props.data[key]+"g"
                        break;
                }

                return(<CardUserData key={index} img={img} type={text} count={count}/>)
            })}
        </div>
    )
}

export default UserData