function autoCompany(carsArray){
    const carsAll = new Map();

    for (const row of carsArray) {
        let [company, car, quantity] = row.split(" | ");
        quantity = Number(quantity);
        if(!carsAll.has(company)){
            carsAll.set(company, {});
        }

        if(!carsAll.get(company).hasOwnProperty(car)){
            carsAll.get(company)[car] = quantity;
        }else{
            carsAll.get(company)[car] += quantity;
        }
    }

    for (const currentCompany of carsAll) {
        console.log(currentCompany[0]);
        for (const currentCar of Object.keys(currentCompany[1])) {
            console.log(`###${currentCar} -> ${currentCompany[1][currentCar]}`);
        }
    }
}

// Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100


autoCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);
