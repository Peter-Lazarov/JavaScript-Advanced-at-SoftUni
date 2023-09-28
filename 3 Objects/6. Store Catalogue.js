function storeCatalogue(dataArray){

    dataArray.sort();

    let productsAll = {};

    let firstLetter = dataArray[0].charAt(0);
    productsAll[firstLetter] = "";

    for(let product of dataArray){
        let [productName, productPrice] = product.split(" : ");
        if(firstLetter != productName.charAt(0)){
            firstLetter = productName.charAt(0);
            productsAll[firstLetter] = ""; 
        }
        productName = "  " + productName;
        productsAll[productName] = productPrice;
    }

    //console.log();
    //console.table(productsAll)

    let keysArray = Object.keys(productsAll);
    let valueArray = Object.values(productsAll);

    for (let i = 0; i < keysArray.length; i++) {
        let value = valueArray[i];
        if(value != ""){
            value = ": " + value;
        }
        console.log(`${keysArray[i]}${value}`);
    }

}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);
