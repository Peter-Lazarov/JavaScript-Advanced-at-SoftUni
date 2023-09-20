function elements(arrayWithCommands){
    let currentPlace = 0;
    let arrayWithValue = [];
    arrayWithCommands.forEach(element => {
        currentPlace++;
        if(element == "add"){
            arrayWithValue.push(currentPlace);
        }else if(element == "remove"){
            arrayWithValue.pop();
        }
    });
    
    if(arrayWithValue.length > 0){
        arrayWithValue.forEach(element => {
            console.log(element);
        });
    }else{
        console.log("Empty");
    }
}

elements(['add', 
'add', 
'add', 
'add']);

elements(['add', 
'add', 
'remove', 
'add', 
'add'])

elements(['remove', 
'remove', 
'remove'])
