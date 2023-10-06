function generateReport() {
    let personAllObjects = [];
    let personObject = {};
    let columnSetNumbers = [];

    if(document.getElementsByName("employee")[0].checked){
        columnSetNumbers.push(0);
    }
    if(document.getElementsByName("deparment")[0].checked){
        columnSetNumbers.push(1);
    }
    if(document.getElementsByName("status")[0].checked){
        columnSetNumbers.push(2);
    }
    if(document.getElementsByName("dateHired")[0].checked){
        columnSetNumbers.push(3);
    }
    if(document.getElementsByName("benefits")[0].checked){
        columnSetNumbers.push(4);
    }
    if(document.getElementsByName("salary")[0].checked){
        columnSetNumbers.push(5);
    }
    if(document.getElementsByName("rating")[0].checked){
        columnSetNumbers.push(6);
    }

    let columnTitles = document.querySelectorAll("table thead tr")[0].getElementsByTagName("th"); 

    let rowsCount = document.querySelectorAll("table tbody tr").length;

    for (let row = 0; row < rowsCount; row++) {
        columnSetNumbers.forEach(element => {
            personObject[columnTitles[element].textContent.trim().toLowerCase()] = document.querySelectorAll("table tbody tr")[row].getElementsByTagName("td")[element].textContent;
        });
        personAllObjects.push(Object.assign(personObject));
        //console.log(personObject);
        personObject = {};
    }
    
    document.getElementById("output").innerHTML = JSON.stringify(personAllObjects, null, " ");

    //console.log(JSON.stringify(personAllObjects));
}
