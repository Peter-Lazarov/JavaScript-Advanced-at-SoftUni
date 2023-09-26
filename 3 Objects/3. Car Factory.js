function carFactory(carDataObject){
    let carPartsObject = {};

    carPartsObject.model = carDataObject.model;
    let power = carDataObject.power;

    if(power <= 90){
        carPartsObject.engine = { power: 90, volume: 1800 }
    }else if(power <= 120){
        carPartsObject.engine = { power: 120, volume: 2400 }
    }else{
        carPartsObject.engine = { power: 200, volume: 3500 }
    }

    let carriage = carDataObject.carriage;
    if(carriage == "hatchback"){
        carPartsObject.carriage = { type: "hatchback", color: carDataObject.color }
    }else if(carriage == "coupe"){
        carPartsObject.carriage = { type: "coupe", color: carDataObject.color }
    }

    let wheelsSizeInNumber = Number(carDataObject.wheelsize);
    if(wheelsSizeInNumber % 2 == 0){
        wheelsSizeInNumber -= 1;
    }
    
    carPartsObject.wheels = [wheelsSizeInNumber, wheelsSizeInNumber, wheelsSizeInNumber, wheelsSizeInNumber];

    return carPartsObject;
}

carFactory({ 
model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 
});
