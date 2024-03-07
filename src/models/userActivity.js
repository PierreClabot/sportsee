import Session from "./session";

class UserActivity{
    constructor(data){
        this.userId = data.userId;
        this.sessions = []

        data.sessions.forEach(elem=>{
            let session = new Session(elem);
            
            this.sessions.push(session);
        })

    }
}

export default UserActivity