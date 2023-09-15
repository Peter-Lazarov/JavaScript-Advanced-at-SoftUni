function timeToWalk(steps, footLength, speed){
    
    let distance = steps * footLength;
    let timeInMinutes = ((distance / 1000)/ speed) * 60;
    let rest = Math.floor(distance / 500);
    timeInMinutes += rest;

    let hours = Math.floor(timeInMinutes / 60);

    let minutes = Math.floor(timeInMinutes % 60);

    let seconds = Math.round((timeInMinutes - (hours * 60) - minutes) * 60);
    
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5); //4000, 0.60, 5, 00:32:48
