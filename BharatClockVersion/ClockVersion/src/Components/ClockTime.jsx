import React, { useEffect } from 'react'
import { useState } from 'react';
function ClockTime() {
    let [time,setTime] =useState(new Date());
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000)

        return ()=>{
            clearInterval(intervalId);
        }
    },[])

  return (
    <div>
        <center><p>The current time is :-{time.toLocaleDateString()}-{time.toLocaleTimeString()}</p></center>
    </div>
  )
}

export default ClockTime