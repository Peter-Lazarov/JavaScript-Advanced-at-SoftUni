function sortArrayTwoCriteria(array){
    //not working
    //array.sort((a, b) => a.length - b.length).sort((a, b) => a.localeCompare(b));
    function compareByName(a, b){
        if(a.length != b.length){
            return a.length - b.length;
        }else {
            return a.localeCompare(b);
        }
    }

    array.sort(compareByName);
    array.forEach(element => {
        console.log(element);
    });
}

sortArrayTwoCriteria(['alpha', 
'beta', 
'gamma']);

sortArrayTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);
