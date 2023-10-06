function generateReport() {
    let personAllObjects = [];
    let personObject = {};
    let columnSetNumbers = [];

    let columnsAll = document.querySelectorAll("table thead tr th input");
    let columnsCount = columnsAll.length;
    for (let i = 0; i < columnsCount; i++) {
        let checkBox = columnsAll[i].checked;
        if(checkBox){
            columnSetNumbers.push(i);
        }
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
