import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

function DailyActivity(props){


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div>{`${payload[0].value}kg`}</div>
        <div>{`${payload[1].value}kCal`}</div>
      </div>
    );
  }

  return null;
};

    const sessionsWithIndex = props.data.map((session, index) => ({ ...session, index: index + 1 }));

    return (
      <div className="dailyActivity">
        <ResponsiveContainer width="100%" height="100%">
        <p className='titre'>Activité quotidienne</p>
        <BarChart
          width={500}
          height={300}
          data={sessionsWithIndex}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          barGap={10}
        >

          <CartesianGrid strokeDasharray="2" vertical={false}/>
          <XAxis dataKey="index" tickLine="3" stroke="#9B9EAC" />
          <YAxis yAxisId="right" orientation="right" domain={[75, 83]} padding={{left:400}} stroke="" tick={{ fill: '#9B9EAC' }}/>
          <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" hide={true} />
          <Tooltip content={<CustomTooltip />}/>
          <Legend verticalAlign="top" align='right' radius={[10,10,10,10]} height={36} iconType="circle" iconSize={8}/>
          <Bar yAxisId="right" barSize={7} dataKey="kilogram" radius={[10,10,0,0]} fill="#282D30" name="Poids (kg)" />
          <Bar yAxisId="left" barSize={7} dataKey="calories" radius={[10,10,0,0]} fill="#E60000" name="Calories brûlées (kCal)"/>
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  


}

export default DailyActivity