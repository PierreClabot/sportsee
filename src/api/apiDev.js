// import { currentEnvironment, environments } from "../config/config"
import axios from 'axios';
class ApiDev{

    constructor(){
        this.axios = axios;
        this.apiUrl = "/data/data.json"


    }

    getUserData(idUser){
        return this.axios.get(this.apiUrl)
        .then(response=>{
            return response.data.userMainData.filter((data)=>data.id == idUser)[0]
        })
        .catch(error => {
            if (error.response) {
              console.error('Erreur de réponse du serveur:', error.response.status, error.response.data);
            }
            return(new Error("Error"))
          });
    }


    /******************************************************************************** */

    getUserActivity(idUser){
        return this.axios.get(this.apiUrl)
        .then(response=>{
            return response.data.userActivity.filter((data)=>data.userId == idUser)[0]
        })
        .catch(error => {
            if (error.response) {
              console.error('Erreur de réponse du serveur:', error.response.status, error.response.data);
            }
            return(new Error("Error"))
          });
    }



     /******************************************************************************** */

    getAverageSession(idUser){
        return this.axios.get(this.apiUrl)
        .then(response=>{
            return response.data.userAverageSessions.filter((data)=>data.userId == idUser)[0]
        })
        .catch(error => {
            if (error.response) {
              console.error('Erreur de réponse du serveur:', error.response.status, error.response.data);
            }
            return(new Error("Error"))
          });
    }

     /******************************************************************************** */

    getUserPerformance(idUser){
        return this.axios.get(this.apiUrl)
        .then(response=>{
            return response.data.userPerformance.filter((data)=>data.userId == idUser)[0]
        })
        .catch(error => {
            if (error.response) {
              console.error('Erreur de réponse du serveur:', error.response.status, error.response.data);
            }
            return(new Error("Error"))
          });
    }

}

export default ApiDev