function popAndPush(array, cirles){
    for (let i = 0; i < cirles; i++) {
        let currentItem = array.pop();
        array.unshift(currentItem);
    }

    console.log(array.join(" "));
}

popAndPush(['1', 
'2', 
'3', 
'4'], 
2);
