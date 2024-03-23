import { even } from 'check-types';
import React from 'react';
import { useState,useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceArea,Rectangle,Path,ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import SessionLength from '../../models/sessionLength';

function TimeSession(props){

    if(!props.data) return

    const formatDayOfWeek = (tickItem) => {
        const arrDay = ["L","M","M","J","V","S","D"]
        return arrDay[tickItem-1];
      };

      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {

          return (
            <>
              <div className="custom-tooltip">
                <p className="label">{`${payload[0].value} min`}</p>
              </div>
              </>);

        }

        return null;
        
      }


    return (
    <>  
        <div className="container-lineChart" >
          <ResponsiveContainer width="100%" height="100%" style={{margin:"0"}}>
            <p className='title'>Durée moyenne des sessions</p>
            <LineChart width={260} height={260} data={props.data} background="#ff0000" >

              <XAxis dataKey="day" tickFormatter={formatDayOfWeek} tick={{ fill: '#ffffff',opacity:'0.8' }} stroke='' />
              <YAxis domain={[0,80]} hide={true}/>
              <Tooltip content={<CustomTooltip />}/>

              <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" strokeWidth={3} dot={false} connectNulls={true}  />
            </LineChart>
            </ResponsiveContainer>
        </div>

    </>
    );
}

TimeSession.propTypes = {
  data : PropTypes.arrayOf(PropTypes.instanceOf(SessionLength))
}
export default TimeSession