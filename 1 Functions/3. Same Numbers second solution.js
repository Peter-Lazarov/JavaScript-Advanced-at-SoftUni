function theSame(input){
    let inputAsString = String(input);
    let inputLength = inputAsString.length;
    let inputAsArray = inputAsString.split("");
    let sum = 0;

    inputAsArray.forEach(element => {
        sum += Number(element);
    });

    if(sum / inputLength == inputAsArray[0]){
        console.log(true);
    }else{
        console.log(false);
    }
    console.log(sum);
}
theSame(2222222);
