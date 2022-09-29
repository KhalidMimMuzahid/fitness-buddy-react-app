const setExTimeToDB=(duration)=>{
    console.log(duration)
    const exTimeExistsString= localStorage.getItem('exTime');
    if(!exTimeExistsString){
        let exTimeArray=[];
        exTimeArray.push(duration)
        let exTimeArrayString=JSON.stringify(exTimeArray)
        localStorage.setItem('exTime',exTimeArrayString)
    }
    else{
        let exTimeArray= JSON.parse(exTimeExistsString);
        console.log(exTimeArray)
        exTimeArray.push(duration);
        let exTimeArrayString=JSON.stringify(exTimeArray)
        localStorage.setItem('exTime',exTimeArrayString)
    }
}
export{setExTimeToDB}