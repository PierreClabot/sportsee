import { currentEnvironment, environments } from "../config/config"
// import axios from 'axios';
import ApiDev from "./apiDev";
import ApiProd from "./apiProd";
class Api{

    constructor(){
        
        this.env = currentEnvironment
        if(this.env==environments.dev){
            this.api = new ApiDev()
        }
        
        else if(this.env==environments.prod){
            this.api = new ApiProd()
        }
        
    }

    getUserData(idUser){
        return this.api.getUserData(idUser);
    }


    getUserActivity(idUser){
      return this.api.getUserActivity(idUser)
    }


    getAverageSession(idUser){
      return this.api.getAverageSession(idUser)
    }


    getUserPerformance(idUser){
        return this.api.getUserPerformance(idUser)
    }

}

export default Api