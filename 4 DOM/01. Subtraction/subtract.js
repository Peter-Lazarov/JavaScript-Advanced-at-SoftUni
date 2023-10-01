function subtract() {
    //console.log('TODO:...');
    let digit1 = document.getElementById("firstNumber").value;
    let digit2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = Number(digit1) - Number(digit2);
}