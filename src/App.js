import { useEffect, useState } from 'react';
import './App.css';
import DisplayInfo from './Component/DisplayInfo/DisplayInfo';
import RecordedInfo from './Component/RecordedInfo/RecordedInfo';
import { setExTimeToDB } from './Utilities/utilities';
function App() {
  const[exTime, setExTime]= useState([]);
 
  const exerciseTimeF=(timeDuration)=>{
    // setExTimeToDB(timeDuration)
    let newExTime=[];
    newExTime=[...exTime,timeDuration];
    setExTime(newExTime)
  }
  // useEffect(()=>{
  //   let exTimeDurationString = localStorage.getItem('exTime');
  //   let exTimeArray= JSON.parse(exTimeDurationString);
  //   setExTime(exTimeArray);
  //   console.log(exTime)
  // },[])
  return (
    <div className="App">
      <DisplayInfo exTimeF={exerciseTimeF}></DisplayInfo>
      <RecordedInfo exTimeArray={exTime}></RecordedInfo>
      </div>
  );
}

export default App;
