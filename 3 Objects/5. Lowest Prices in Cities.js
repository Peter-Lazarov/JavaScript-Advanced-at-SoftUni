function pricesInCities(dataArray){
    let productsAll = {};

    for(let town of dataArray){
        let [townName, productName, productPrice] = town.split(" | ");
        productPrice = Number(productPrice);

        if(!productsAll.hasOwnProperty(productName)){
            productsAll[productName] = {};
        }

        if(productsAll[productName]["price"] == undefined || productsAll[productName]["price"] > productPrice){ // undefined > 3 //false
            productsAll[productName]["town"] = townName;
            productsAll[productName]["price"] = productPrice;
        }
    }

    //console.log();
    //console.table(productsAll)
    
    for(let [productName, productProperties] of Object.entries(productsAll)){
        console.log(`${productName} -> ${productProperties.price} (${productProperties.town})`);
    }

}

pricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
