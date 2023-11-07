window.addEventListener("load", solve);
  document.getElementById("first-name").value = "Peter";
  document.getElementById("last-name").value = "Lazarov";
  document.getElementById("age").value = "37";
  document.getElementById("genderSelect").value = "Male";
  document.querySelector("textarea#task").value = "Tove e miastoto za text.";

function solve() {
  let dataAll = [];
  
  let formButtonSubmit = document.querySelector("div.button-section input#form-btn");
  formButtonSubmit.addEventListener("click", submitButtonAction);

  let clearButton = document.querySelector("#clear-btn");
  clearButton.addEventListener("click", clearAction);

  let counter = 0;
  let counterElement = document.querySelector("#progress-count");


  function fromFormToArray (){
    dataAll[0] = document.getElementById("first-name").value;
    dataAll[1] = document.getElementById("last-name").value;
    dataAll[2] = document.getElementById("age").value;
    dataAll[3] = document.getElementById("genderSelect").value;
    dataAll[4] = document.querySelector("textarea#task").value;
  }

  function fromArrayToForm (){
    document.getElementById("first-name").value = dataAll[0];
    document.getElementById("last-name").value = dataAll[1];
    document.getElementById("age").value = dataAll[2];
    document.getElementById("genderSelect").value = dataAll[3];
    document.querySelector("textarea#task").value = dataAll[4];
  }

  function clearForm (){
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("genderSelect").value = "";
    document.querySelector("textarea#task").value = "";
  }

  function createAndSetInProgress (){
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

    let buttonEditElement = document.createElement("button");
    buttonEditElement.classList.add("edit-btn");
    buttonEditElement.textContent = "Edit";
    buttonEditElement.addEventListener("click", editInProgressAction);

    let buttonComplete = document.createElement("button");
    buttonComplete.classList.add("complete-btn");
    buttonComplete.textContent = "Mark as complete";
    buttonComplete.addEventListener("click", completeInProgressAction);

    liElement.appendChild(buttonEditElement);
    liElement.appendChild(buttonComplete);

    let ulInProgressElement = document.querySelector("ul#in-progress");
    ulInProgressElement.appendChild(liElement);
  }

  function submitButtonAction(){
    fromFormToArray();
    
    if(dataAll[0] && dataAll[1] && dataAll[2] && dataAll[3] && dataAll[4]){
      createAndSetInProgress();
      clearForm();
      counter++;
      counterElement.textContent = counter;
    }
  }

  function fromInProgressToArray(inProgressEvent){
    const currentLi = inProgressEvent.target.parentElement;
    const h4Element = currentLi.querySelector("h4").textContent;
    let [firstName, lastName] = h4Element.split(" ");
    dataAll[0] = firstName;
    dataAll[1] = lastName;

    const pGenderAgeElement = currentLi.querySelectorAll("p")[0].textContent;
    let [gender, age] = pGenderAgeElement.split(", ");
    dataAll[2] = age;
    dataAll[3] = gender;

    const pDiscriptionElement = currentLi.querySelectorAll("p")[1].textContent;
    dataAll[4] = pDiscriptionElement.replace("Dish description: ", "");
  }

  function editInProgressAction(event){
    fromInProgressToArray(event);
    event.target.parentElement.remove();
    fromArrayToForm();

    counter--;
    counterElement.textContent = counter;
  }
  
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
