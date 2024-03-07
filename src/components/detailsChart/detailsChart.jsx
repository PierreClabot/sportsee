import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis,Text } from 'recharts';


function DetailsChart(props){
    
    if(!props.data) return 

    const customDomain = ['intensity', 'speed', 'strength', 'endurance', 'energy','cardio'];
    const reorderedData = customDomain.map(name => props.data.find(d => d.name === name));

    const formatTick = (name) => {

        let text = "";
        switch(name){
            case "cardio":
                text = "Cardio"
                break
            case "energy":
                text = "Energie"
                break 
            case "endurance":
                text = "Endurance"
                break 
            case "strength":
                text = "Force"
                break
            case "speed":
                text = "Vitesse"
                break
            case "intensity":
                text = "Intensité"
                break
        }

        return text

      };

      function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
        return (
          <Text
            {...rest}
            verticalAnchor="middle"
            y={y + (y - cy) / 10}
            x={x + (x - cx) / 10}
          >
            {formatTick(payload.value)}
          </Text>
        );
      }

    return (
        <div className='detailsChart'>
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={reorderedData} margin={{ top: 50, right: 20, bottom: 20, left: 10 }} >
                <PolarGrid gridType="polygon" radialLines={false}/>
                <PolarAngleAxis dataKey="name" stroke='#fff'  tickLine={{ length: 0 }} tick={props => renderPolarAngleAxis(props)} fontSize={12} />
                <PolarRadiusAxis tick={false} axisLine={false} />
                <Radar dataKey="value"  stroke="##FF0101B2" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
            </ResponsiveContainer>
        </div>

      );
}

export default DetailsChart