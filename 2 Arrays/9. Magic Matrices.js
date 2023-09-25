function magicMatix(array2d){
    let currentSum = 0;
    let rowSum = 0;
    let columnSum = 0;
    let onlyOnce = true;
    let onlyOnce2 = true;
    for (let i = 0; i < array2d.length; i++) {
        for (let j = 0; j < array2d.length; j++) {
            rowSum += array2d[i][j];
        }

        if(onlyOnce){
            onlyOnce = false;
            currentSum = rowSum;
        }
        if(currentSum != rowSum){
            //console.log("false");
            return false;
        }
        //console.log(rowSum);
        rowSum = 0;
    }

    for (let k = 0; k < array2d.length; k++) {
        for (let j = 0; j < array2d.length; j++) {
            columnSum += array2d[j][k];           
        }
        if(onlyOnce2){
            onlyOnce = false;
            currentSum = columnSum;
        }
        if(currentSum != columnSum){
            //console.log("false");
            return false;
        }
        //console.log(columnSum);
        columnSum = 0;
        
    }
    //console.log("true");
    return true;
}

magicMatix([[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]);
