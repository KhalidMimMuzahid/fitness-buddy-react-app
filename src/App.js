import { useEffect, useState } from 'react';
import './App.css';
import DisplayInfo from './Component/DisplayInfo/DisplayInfo';
import RecordedInfo from './Component/RecordedInfo/RecordedInfo';
import { setExTimeToDB } from './Utilities/utilities';
function App() {
  const[exTime, setExTime]= useState([]);

  const exerciseTimeF=(timeDuration)=>{
    setExTimeToDB(timeDuration)
  }
  useEffect(()=>{

  },[])
  return (
    <div className="App">
      <DisplayInfo exTimeF={exerciseTimeF}></DisplayInfo>
      <RecordedInfo></RecordedInfo>
      </div>
  );
}

export default App;
