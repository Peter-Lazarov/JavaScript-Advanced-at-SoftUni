function getFibonator(){
    let firstNumber = 0;
    let secondNumber = 1;
    let sum = 0;

    function work(){
        sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
        return firstNumber;
    }

    return work;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1

