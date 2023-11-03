function juice(fruitsArray){
    class Fruits{
        constructor(){
            this.store = {};
        }

        processFruit(fruitGiven, quantityGiven){
            if(!this.store.hasOwnProperty(fruitGiven)){
                this.store[fruitGiven] = quantityGiven;
            }else{
                this.store[fruitGiven] += quantityGiven;
            }
        }
    }

    let storeVratza = new Fruits();

    for (const row of fruitsArray) {
        let [fruit, quantity] = row.split(" => ");
        quantity = Number(quantity);
        storeVratza.processFruit(fruit, quantity);
    }

    for (const fruit of Object.keys(storeVratza["store"])) {
        let quantity = Math.floor(storeVratza["store"][fruit] / 1000);
        if(quantity > 0){
            console.log(`${fruit} => ${quantity}`);
        }
    }
    //console.log();
}

// ['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']

juice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
