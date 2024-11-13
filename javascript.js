const currentTime=()=>{
    let currTime=new Date().toLocaleTimeString();
    console.log(currTime);
    document.getElementById("clock").innerText=currTime;
}
currentTime();
setInterval(currentTime,1000);