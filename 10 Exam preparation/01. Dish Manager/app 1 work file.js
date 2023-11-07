window.addEventListener("load", solve);

function solve() {



  let clearButton = document.querySelector("#clear-btn");
  clearButton.addEventListener("click", clearAction);

  let counter = 0;
  let counterElement = document.querySelector("#progress-count");


 



  






  
  function createAndSetComplete(){
    let liElement = document.createElement("li");
    liElement.classList.add("each-line");

    let articleElement = document.createElement("article");
    let h4Element = document.createElement("h4");
    h4Element.textContent = `${dataAll[0]} ${dataAll[1]}`;

    let pGenderAgeElement = document.createElement("p");
    pGenderAgeElement.textContent = `${dataAll[3]}, ${dataAll[2]}`;
    
    let pDiscriptionElement = document.createElement("p");
    pDiscriptionElement.textContent = "Dish description: " + dataAll[4];
    liElement.appendChild(articleElement);

    articleElement.appendChild(h4Element);
    articleElement.appendChild(pGenderAgeElement);
    articleElement.appendChild(pDiscriptionElement);

    let ulInProgressElement = document.querySelector("ul#finished");
    ulInProgressElement.appendChild(liElement);

    counter--;
    counterElement.textContent = counter;
  }

  function completeInProgressAction(event){
    fromInProgressToArray(event);
    event.target.parentElement.remove();
    createAndSetComplete();
  }

  function clearAction (){
    // let liAll = document.querySelectorAll("ul#finished li.each-line");

    // liAll.forEach(li => {
    //   li.remove();
    // });
    document.querySelector("ul#finished").innerHTML = "";
  }
}
