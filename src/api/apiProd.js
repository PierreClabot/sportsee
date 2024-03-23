import axios from 'axios';
class ApiProd{

    constructor(){
        this.axios = axios;
        this.apiUrl = "http://localhost:3000/user/"
    }

    getUserData(idUser){
        return this.axios.get(this.apiUrl+idUser)
        .then(response=>{
            return response.data.data
        })
        .catch(error => {
            if (error.response) {
              console.error('Erreur de réponse du serveur:', error.response.status, error.response.data);
              throw new Error("Erreur "+error.response.status + "| Utilisateur inconnu")
            }

            throw new Error("Erreur 500 | Le serveur ne répond pas");
        });
    }


    /******************************************************************************** */

    getUserActivity(idUser){
        return this.axios.get(this.apiUrl+idUser+"/activity")
        .then(response=>{
            return response.data.data
        })
        .catch(error => {
          if (error.response) {
            console.error('Erreur de réponse du serveur:', error.response.status, error.response.data);
            throw new Error("Erreur "+error.response.status + "| Utilisateur inconnu")
          }

          throw new Error("Erreur 500 | Le serveur ne répond pas");
        });
    }

     /******************************************************************************** */

    getAverageSession(idUser){
        return this.axios.get(this.apiUrl+idUser+"/average-sessions")
        .then(response=>{
            return response.data.data
        })
        .catch(error => {
          if (error.response) {
            console.error('Erreur de réponse du serveur:', error.response.status, error.response.data);
            throw new Error("Erreur "+error.response.status + "| Utilisateur inconnu")
          }

          throw new Error("Erreur 500 | Le serveur ne répond pas");
        });
    }

     /******************************************************************************** */

    getUserPerformance(idUser){
        return this.axios.get(this.apiUrl+idUser+"/performance")
        .then(response=>{
            return response.data.data
        })
        .catch(error => {
            if (error.response) {
              console.error('Erreur de réponse du serveur:', error.response.status, error.response.data);
              throw new Error("Erreur "+error.response.status + "| Utilisateur inconnu")
            }

            throw new Error("Erreur 500 | Le serveur ne répond pas");
        });
    }

}

export default ApiProd