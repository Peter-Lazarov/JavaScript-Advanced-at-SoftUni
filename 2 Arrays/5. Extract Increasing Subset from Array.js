function writeIncreasingNumber(array){
    let increasingNumbers = [];
    let currentMaxNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if(currentMaxNumber <= array[i]){
            currentMaxNumber = array[i];
            increasingNumbers.push(array[i]);
            
        }
    }
    //console.log(increasingNumbers);
    return increasingNumbers;
}

writeIncreasingNumber([1, 
3, 
8, 
4, 
10, 
12, 
3, 
2, 
24]);
