function divisor(digitOne, digitTwo){
    let testStart = 0;
    if(digitOne > digitTwo){
        testStart = digitTwo;
    }else{
        testStart = digitOne;
    }

    for (testStart; testStart > 0; testStart--) {
        if(digitOne % testStart == 0 && digitTwo % testStart == 0){
            break;
        }
    }
    console.log(testStart);
}

divisor(15, 5);
divisor(2154, 458);
