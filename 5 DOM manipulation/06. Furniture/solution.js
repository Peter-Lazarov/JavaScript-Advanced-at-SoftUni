function solve() {
  let externalFurnitureObject = {};
  function generateAction(){
    let textAreaFirst = document.querySelectorAll("textarea")[0].value;
    document.querySelectorAll("textarea")[0].value = "";
    let furnitureAll = JSON.parse(textAreaFirst);
    externalFurnitureObject = Object.assign(furnitureAll);

    for (let i = 0; i < furnitureAll.length; i++) {
      let rowCurrent = document.createElement("tr");
      let cellImg = document.createElement("td");
      let imgElement = document.createElement("img");
      imgElement.setAttribute("src", furnitureAll[i]["img"]);
      cellImg.appendChild(imgElement);
      rowCurrent.appendChild(cellImg);
      
      let cellName = document.createElement("td");
      let pName = document.createElement("p");
      pName.textContent = furnitureAll[i]["name"];
      cellName.appendChild(pName);
      rowCurrent.appendChild(cellName);

      let cellPrice = document.createElement("td");
      let pPrice = document.createElement("p");
      pPrice.textContent = furnitureAll[i]["price"];
      cellPrice.appendChild(pPrice);
      rowCurrent.appendChild(cellPrice);

      let cellDecoration = document.createElement("td");
      let pDecoration = document.createElement("p");
      pDecoration.textContent = furnitureAll[i]["decFactor"];
      cellDecoration.appendChild(pDecoration);
      rowCurrent.appendChild(cellDecoration);

      let cellCheckbox = document.createElement("td");
      let inputCheckbox = document.createElement("input");
      inputCheckbox.type = "checkbox";
      cellCheckbox.appendChild(inputCheckbox);
      rowCurrent.appendChild(cellCheckbox);

      document.querySelector("table tbody").appendChild(rowCurrent);
    }
  }

  function buyAction(){
    let checkboxAll = document.querySelectorAll("input");
    let markedAllNames = "";
    let markedAllPrice = 0;
    let markedAllDecorationAverage = 0;

    for (let i = 0; i < checkboxAll.length; i++) {
      if(checkboxAll[i].checked){
        markedAllNames = markedAllNames + externalFurnitureObject[i-1]["name"] + ", ";
        markedAllPrice = markedAllPrice + externalFurnitureObject[i-1]["price"];
        markedAllDecorationAverage = markedAllDecorationAverage + externalFurnitureObject[i-1]["decFactor"];
      }
    }
    markedAllNames = markedAllNames.substring(0, markedAllNames.length-2);
    markedAllDecorationAverage = markedAllDecorationAverage / markedAllNames.split(", ").length;
    let output = "Bought furniture: " + markedAllNames + "\r\n" + `Total price: ${markedAllPrice.toFixed(2)}` + "\r\n" + `Average decoration factor: ${markedAllDecorationAverage}`;
    document.querySelectorAll("textarea")[1].value = output;
  }

  document.querySelectorAll("button")[0].addEventListener("click", generateAction);
  document.querySelectorAll("button")[1].addEventListener("click", buyAction);
}
