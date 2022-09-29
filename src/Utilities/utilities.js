
const setBreakTimeToDB=(BreakTime)=>{
    localStorage.setItem('breakTime',BreakTime);
}
const getBreakTimeFromDB=()=>{
    const breakTime = localStorage.getItem('breakTime');
    if(breakTime){
        return breakTime;
    }
    else{
        return 0;
    }
}

export{setBreakTimeToDB, getBreakTimeFromDB}