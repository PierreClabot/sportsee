import KeyData    from "./keyData"
import UserInfos  from "./userInfos"

class UserMainData{
    constructor(data){
        this.id         = data.id;
        this.userInfos  = new UserInfos(data.userInfos);
        this.todayScore = data.todayScore;
        if(!this.todayScore) this.todayScore = data.score;
        this.keyData    = new KeyData(data.keyData);
    }
}

export default UserMainData