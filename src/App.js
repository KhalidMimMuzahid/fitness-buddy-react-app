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
      <div className='main'>
        <DisplayInfo exTimeF={exerciseTimeF}></DisplayInfo>
        <RecordedInfo exTimeArray={exTime}></RecordedInfo>
      </div>
      <Question></Question>
    </div>
  );
}

export default App;
