function solve() {
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;

  if(currentCase == "Pascal Case"){
    input = input.toLowerCase();
    let inputArray = input.split(" ");

    let result = "";
    for (let i = 0; i < inputArray.length; i++) {
      result = result + inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);;
    }
    document.getElementById("result").innerHTML = result;
    //console.log(result);
  }else if(currentCase == "Camel Case"){
    input = input.toLowerCase();
    let inputArray = input.split(" ");

    let result = inputArray[0];
    for (let i = 1; i < inputArray.length; i++) {
      result = result + inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);;
    }

    document.getElementById("result").innerHTML = result;
    //console.log(result);
  }else{
    document.getElementById("result").innerHTML = "Error!";
    //console.log("Error!");
  }
}
