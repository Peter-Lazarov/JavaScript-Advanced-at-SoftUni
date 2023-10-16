function arguments(...parametersAll){
    let parametersObject = {};
    parametersAll.forEach(element => {
        let elementType = typeof(element);
        if(elementType == "object"){
            console.log(`${elementType}:`);
        }else{
            console.log(`${elementType}: ${element}`);
        }
        if(!parametersObject.hasOwnProperty(elementType)){
            parametersObject[elementType] = 1;
        }else{
            parametersObject[elementType] += 1;
        }
    });

    let sortObject = Object.entries(parametersObject).sort((a,b) => b[1] - a[1]);

    for (const currentObject of Object.entries(sortObject)) {
        console.log(`${currentObject[1][0]} = ${currentObject[1][1]}`);
    }
    //console.log(parametersAll);
}

//arguments('cat', 42, function () { console.log('Hello world!'); });
arguments({ name: 'bob'}, 3.333, 9.999);
