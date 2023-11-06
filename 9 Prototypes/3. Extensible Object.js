function extensibleObject(){
    let parrentObject = {};
    let childObject = Object.create(parrentObject);

    childObject.extend = function(object){
        let objectAsArray = Object.entries(object);

        for (const [key, value] of objectAsArray) {
            if(typeof(value) === "function"){
                parrentObject[key] = value;
            }else{
                childObject[key] = value;
            }
        }
    }
    
    return childObject;
}

const myObj = extensibleObject(); 
console.log(myObj.extend);
