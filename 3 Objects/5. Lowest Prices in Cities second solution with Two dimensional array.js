function pricesInCities(dataArray){
    //One dimensional arrary that will become Two dimensional array later
    let productsAll = [];

    for (let i = 0; i < dataArray.length; i++) {
        //Two dimensional array initializing
        productsAll[i] = [];
        let [townName, productName, productPrice] = dataArray[i].split(" | ");
        productPrice = Number(productPrice);
        let step = 0;
        productsAll[i][step] = productName;
        step++
        productsAll[i][step] = productPrice;
        step++
        productsAll[i][step] = townName;      
    }
    //productsAll.sort();

    let productsForPrint = [];
    let productsForCheck = [];
    let index = -1;
    //let productCurrent = productsAll.shift();

    for (let i = 0; i < productsAll.length; i++) {
        let productCurrent = productsAll[i];

        if(!productsForCheck.includes(productCurrent[0])){
            index++;
            productsForPrint.push(productCurrent);
            productsForCheck.push(productCurrent[0]);
            for (let j = 1; j < productsAll.length; j++) {
                let productNext = productsAll[j];

                if(productCurrent[0] == productNext[0]){
                    if(productCurrent[1] > productNext[1]){
                        productsForPrint[index] = productNext;
                    }
                }
            }
            
        }
    }

    for (const product of productsForPrint) {
        console.log(`${product[0]} -> ${product[1]} (${product[2]})`);
    }
}


pricesInCities(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000',]);
