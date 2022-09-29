import React, { useEffect, useState } from 'react';
import './RecordedInfo.css'
import { setBreakTimeToDB, getBreakTimeFromDB} from '../../Utilities/utilities';
import profilePic from '../../images/prifilePic.jpg'

const RecordedInfo = ({exTimeArray}) => {
    const [breakTimeDisplay,setBreakTimeDisplay]= useState([])
    let totalExTime= exTimeArray.reduce((total,current)=>{
        return total+ current ;
    },0)
    const setBreakTime=(breakTime)=>{
        setBreakTimeDisplay(breakTime);
        setBreakTimeToDB(breakTime);
    }
    useEffect(()=>{
        let breakTime= getBreakTimeFromDB();
        setBreakTimeDisplay(breakTime);
    },[])
    return (
        <div>
            <div className='recorded-info'>
                <div className='user'>
                    <div className='user-header'>
                        <img src={profilePic} alt="" />
                        <div className='user-info'>
                            <h3 className='user-name'>Khalid Mim Muzhaid</h3>
                            <p className='user-location'>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className='user-physical-info'>
                        <div>
                            <h3>75kg</h3>
                            <p>weight</p>
                        </div>
                        <div>
                            <h3>5' 8"</h3>
                            <p>height</p>
                        </div>
                        <div>
                            <h3>26 years</h3>
                            <p>age</p>
                        </div>
                    </div>
                </div>
                <div className='breaks-info'>
                    <h3>Add a Break</h3>
                    <div className='breaks'>
                    {/* {breakTimes.map(breakTime=> <BreakTimes breakTime={breakTime}></BreakTimes>)} */}
                        <p onClick={()=>setBreakTime(10)}>10s</p>
                        <p onClick={()=>setBreakTime(20)}>20s</p>
                        <p onClick={()=>setBreakTime(30)}>30s</p>
                        <p onClick={()=>setBreakTime(40)}>40s</p>
                        <p onClick={()=>setBreakTime(50)}>50s</p>
                    </div>
                </div>
                <div className='exercise-details'>
                    <h3>Excercise Details</h3>

                    <div className="exercise-block">
                        <h4>Exercise time</h4>
                        <p><span id="excercise-time">{totalExTime}</span> seconds</p>
                    </div>
                    <div className="exercise-block">
                        <h4>Break time</h4>
                        <p><span id="break-time">{breakTimeDisplay}</span> seconds</p>
                    </div>
                </div>
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default RecordedInfo;