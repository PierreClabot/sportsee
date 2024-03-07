import { currentEnvironment, environments } from "../config/config"
import axios from 'axios';
class Api{

    constructor(){
        this.axios = axios;
        this.env = currentEnvironment
        if(this.env==environments.dev){
            this.apiUrl = "/data/data.json"
        }
        
        else if(this.env==environments.prod){
            this.apiUrl = "http://localhost:3000/user/"
        }
    }

    getUserData(idUser){
        if(this.env == "dev") return this.getUserDataTest(idUser)
        else if (this.env == "prod") return this.getUserDataProd(idUser)
    }

    getUserDataTest(idUser){
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

    getUserDataProd(idUser){
        return this.axios.get(this.apiUrl+idUser)
        .then(response=>{
            console.log("response.data",response.data.data)
            return response.data.data
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
        if(this.env == "dev") return this.getUserActivityTest(idUser)
        else if (this.env == "prod") return this.getUserActivityProd(idUser)
    }

    getUserActivityTest(idUser){
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

    getUserActivityProd(idUser){
        return this.axios.get(this.apiUrl+idUser+"/activity")
        .then(response=>{
            console.log("response.data",response.data.data)
            return response.data.data
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
        if(this.env == "dev") return this.getAverageSessionTest(idUser)
        else if (this.env == "prod") return this.getAverageSessionProd(idUser)
    }

    getAverageSessionTest(idUser){
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

    getAverageSessionProd(idUser){
        return this.axios.get(this.apiUrl+idUser+"/average-sessions")
        .then(response=>{
            console.log("response.data",response.data.data)
            return response.data.data
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
        if(this.env == "dev") return this.getUserPerformanceTest(idUser)
        else if (this.env == "prod") return this.getUserPerformanceProd(idUser)
    }

    getUserPerformanceTest(idUser){
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

    getUserPerformanceProd(idUser){
        return this.axios.get(this.apiUrl+idUser+"/performance")
        .then(response=>{
            console.log("response.data",response.data.data)
            return response.data.data
        })
        .catch(error => {
            if (error.response) {
              console.error('Erreur de réponse du serveur:', error.response.status, error.response.data);
            }
            return(new Error("Error"))
          });
    }
}

export default Api