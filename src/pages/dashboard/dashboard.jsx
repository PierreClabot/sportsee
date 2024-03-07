import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import HorizontalMenu from "../../components/horizontalMenu/horizontalMenu";
import VerticalMenu from "../../components/verticalMenu/verticalMenu";
import UserMainData from "../../models/userMainData";
import UserActivity from "../../models/userActivity";
import UserAverageSession from "../../models/userAverageSession";
import UserPerformance from "../../models/userPerformance";

import UserData from "../../components/userData/userData";

import DailyActivity from "../../components/dailyActivity/dailyActivity";
import TimeSession from "../../components/timeSession/timeSession";
import DetailsChart from "../../components/detailsChart/detailsChart";
import ScoreChart from "../../components/scoreChart/scoreChart";
import Api from "../../api/api";

import { defaultUserID } from "../../config/config";

function Dashboard() { 


const { id } = useParams();

let userId
id ? userId = id : userId = 18

let [load,setLoad] = useState("")
let [userData,setUserData] = useState("")
let [userActivity,setUserActivity] = useState("")
let [averageSessions,setAverageSessions] = useState("")
let [userPerformance,setUserPerformance] = useState("")

useEffect(()=>{



    function getMainData(){
        const api = new Api();
        api.getUserData(userId)
        .then(res=>{
            setUserData(new UserMainData(res))
            setLoad(true);
        })
    }

    function getUserActivity(){
        const api = new Api();
        api.getUserActivity(userId)
        .then(res=>{
            setUserActivity(new UserActivity(res))
        })
    }

    function getAverageSession(){
        const api = new Api();
        api.getAverageSession(userId)
        .then(res=>{
            setAverageSessions(new UserAverageSession(res))
        })
    }

    function getUserPerformance(){
        const api = new Api();
        api.getUserPerformance(userId)
        .then(res=>{
            setUserPerformance(new UserPerformance(res))
        })
    }


    getMainData();
    getUserActivity()
    getAverageSession()
    getUserPerformance();

},[id])
    
if(!load) return

  return (
    <>
      <div className="app">
        <HorizontalMenu />
        <main>
          <VerticalMenu />
          <div className="dashboard">
            <div className="textUser">
                <h1>Bonjour <span className="firstName">{userData.userInfos.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="detailsUser">
                <div className="charts">
                    <DailyActivity data={userActivity.sessions}/>
                    <div className="rowChart">
                        <TimeSession data={averageSessions.sessions} />
                        <DetailsChart data={userPerformance.data}/>
                        <ScoreChart data={[{todayScore:userData.todayScore*100}]}/>
                    </div>
                </div>
                <UserData data={userData.keyData}/>
            </div>
            


            
          </div>
        </main>
        
      </div>


    </>
  );
}

export default Dashboard;
