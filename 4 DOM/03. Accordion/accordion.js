function toggle() {
    let button = document.querySelector("#extra").style.display;
    if(button == "block"){
        document.querySelector("#extra").style.display = "none";
        document.getElementsByClassName("button")[0].innerHTML = "More";
    }else{
        document.querySelector("#extra").style.display = "block";
        document.getElementsByClassName("button")[0].innerHTML = "Less";
    }    
}
