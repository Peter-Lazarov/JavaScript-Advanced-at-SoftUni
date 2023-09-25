function calorieObject(array){
    let foodsAll = {};

    for (let i = 0; i < array.length; i++) {
        foodsAll[array[i]] = Number(array[++i]);
    }

    console.log(foodsAll);
}

calorieObject(['Yoghurt', '48', 'Rise', '138','Apple', '52']);
