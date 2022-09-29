import { useEffect, useState } from 'react';
import './App.css';
import DisplayInfo from './Component/DisplayInfo/DisplayInfo';
import Question from './Component/Question/Question';
import RecordedInfo from './Component/RecordedInfo/RecordedInfo';
import { setExTimeToDB } from './Utilities/utilities';
function App() {
  const[exTime, setExTime]= useState([]);
 
  const exerciseTimeF=(timeDuration)=>{
    let newExTime=[];
    newExTime=[...exTime,timeDuration];
    setExTime(newExTime)
  }
  return (
    <div className="App">
      <DisplayInfo exTimeF={exerciseTimeF}></DisplayInfo>
      <RecordedInfo exTimeArray={exTime}></RecordedInfo>
      <Question></Question>
    </div>
  );
}

export default App;
