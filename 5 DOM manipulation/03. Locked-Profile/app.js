function lockedProfile() {
    let commonButtonsAll = document.querySelectorAll("div.profile button");

    function clickAction(event){
        let lockButtonStatus = event.target.parentElement.querySelector("input[value=lock]").checked;
        if(!lockButtonStatus){
            if(event.target.parentElement.querySelector("button").textContent === "Hide it"){
                event.target.parentElement.querySelector("div").style.display = "none";
                event.target.parentElement.querySelector("button").textContent = "Show more";
            }else{
                event.target.parentElement.querySelector("div").style.display = "block";
                event.target.parentElement.querySelector("button").textContent = "Hide it";
            }
        }
    }
    for (const button of commonButtonsAll) {
        button.addEventListener("click", clickAction);
    }
}
