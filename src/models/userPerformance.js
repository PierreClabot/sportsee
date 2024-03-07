import UserPerformanceData from "./userPerformanceData";

class UserPerformance{
    constructor(data){
        this.userId = data.userId;
        this.data = [];
        data.data.forEach((elem,index)=>{
            elem.name = data.kind[index+1]
            let dataPerformance = new UserPerformanceData(elem)
            this.data.push(dataPerformance);
        })

    }
}

export default UserPerformance