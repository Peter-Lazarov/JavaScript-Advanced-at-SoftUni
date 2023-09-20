function elementArray(array, element) {
    let newArray = [];
    for (let i = 0; i < array.length; i = i + element) {
        newArray.push(array[i]);
    }
    return newArray;
}

elementArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2);
