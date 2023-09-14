function theSame(input){
    input += "";
    let inputFirstChar = input.substring(0, 1);
    let replaced = input.replace(new RegExp(inputFirstChar, "g"), "");

    if(replaced == ""){
        console.log(true);
    }else{
        console.log(false);
    }
}
theSame(2222222);
