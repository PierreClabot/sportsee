import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer,PolarAngleAxis,Text} from 'recharts';


function ScoreChart(props){

    return (
        <div className="scoreChart">
            <ResponsiveContainer width="100%" height="100%">
            <p className='title'>Score</p>
            <RadialBarChart cx="50%" cy="50%" innerRadius="70%" barSize={10} data={props.data} startAngle={-270} endAngle={90} tick={false}>
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                
                <RadialBar
                minAngle={15}
                clockWise={false}
                cornerRadius={10}
                dataKey="todayScore"
                fill="#FF0000"
                />

            </RadialBarChart>

            </ResponsiveContainer>
            <p className='text'>
              <span className='percent'>{props.data[0].todayScore}%</span> 
              de votre objectif
            </p>
        </div>

      );

}

export default ScoreChart