import SessionLength from "./sessionLength";

class UserAverageSession{
    constructor(data){
        this.userId = data.userId;
        this.sessions = [];
        data.sessions.forEach(elem=>{
            let session = new SessionLength(elem);
            this.sessions.push(session)
        })
    
    }
}

export default UserAverageSession