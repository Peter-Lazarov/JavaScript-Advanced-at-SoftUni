function sortingNumbers(array){
    array.sort((a, b) => a - b)
    let ciclesCount = Math.round(array.length / 2, 0);
    let processedArray = [];
    //console.log(array);
    for (let i = 0; i < ciclesCount; i++) {
        processedArray.push(array.shift());
        if(array.length > 0){
            processedArray.push(array.pop());
        }
    }
    
    //console.log(array);
    //console.log(processedArray);
    //console.log("[-3, 65, 1, 63, 3, 18, 52, 31, 48]");
    return processedArray;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]);
[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]