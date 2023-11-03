function juice(fruitsArray){

    let fruitsMap = new Map();
    let bottlesMap = new Map();

    for (const row of fruitsArray) {
        let [fruit, quantity] = row.split(" => ");
        quantity = Number(quantity);

        let collectedQuantity = fruitsMap.get(fruit);
        if(collectedQuantity == undefined){
            fruitsMap.set(fruit, quantity);
        }else{
            fruitsMap.set(fruit, fruitsMap.get(fruit) + quantity);
        }

        collectedQuantity = fruitsMap.get(fruit);

        if(collectedQuantity > 999){
            let bottlesCreated = Math.floor(collectedQuantity / 1000);
            fruitsMap.set(fruit, collectedQuantity - (bottlesCreated * 1000));
            if(!bottlesMap.has(fruit)){
                bottlesMap.set(fruit, bottlesCreated);
            }else{
                bottlesMap.set(fruit, bottlesMap.get(fruit) + bottlesCreated);
            }
        }
    }

    for (const fruit of bottlesMap) {
        console.log(`${fruit[0]} => ${fruit[1]}`);
    }

    //console.log();
}

juice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
