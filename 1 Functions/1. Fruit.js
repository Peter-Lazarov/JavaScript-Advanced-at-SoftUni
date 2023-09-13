function fruit(fruitType, grams, moneyKilo){
    let weight = Number(grams)/1000;
    let money = weight * Number(moneyKilo);
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80);
