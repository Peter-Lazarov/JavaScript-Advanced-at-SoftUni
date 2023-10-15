function sortArray(array, way){
    way === "asc" ? array.sort((a,b) => a - b) : array.sort((a,b) => b - a);
    //console.log(array);
    return array;
}

sortArray([14, 7, 17, 6, 8], 'asc');
