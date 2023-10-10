function addItem() {
    let textField = document.getElementById("newItemText").value;
    let valueField = document.getElementById("newItemValue").value;

    let optionElement = document.createElement("option");
    optionElement.textContent = textField;
    optionElement.value = valueField;
    //optionElement.setAttribute("value", valueField);

    let selectElement = document.getElementById("menu");
    selectElement.appendChild(optionElement);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}
