function radar(speed, area){

    let motorWay = 130;
    let interState = 90;
    let inCity = 50;
    let residentialArea = 20;
    
    let speedDifference;
    let status = "";
    let speedAllowed = 0;

    if(area == "motorway"){
        speedDifference = speed - motorWay;
        area = motorWay;
        speedAllowed = motorWay;
    }else if(area == "interstate"){
        speedDifference = speed - interState;
        area = interState;
        speedAllowed = interState;
    }else if(area == "city"){
        speedDifference = speed - inCity;
        area = inCity;
        speedAllowed = inCity;
    }else if(area == "residential"){
        speedDifference = speed - residentialArea;
        area = residentialArea;
        speedAllowed = residentialArea;
    }
    
    if(speedDifference < 1){
        console.log(`Driving ${speed} km/h in a ${area} zone`);
    }else if(speedDifference < 21){
        status = "speeding";
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedAllowed} - ${status}`);
    }else if(speedDifference < 41){
        status = "excessive speeding";
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedAllowed} - ${status}`);
    }else{
        status = "reckless driving";
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedAllowed} - ${status}`);
    }

}


radar(200, 'motorway');

