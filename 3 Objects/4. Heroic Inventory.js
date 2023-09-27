function heroInventory(heroesArray){
    let currentHero = {};
    let heroesAll = [];
    for(let hero of heroesArray){
        let [heroName, heroLevel, heroItems] = hero.split(" / ");
        currentHero.name = heroName;
        currentHero.level = Number(heroLevel);
        if(heroItems == undefined){
            currentHero.items = [];
        }else{
            currentHero.items = heroItems.split(", ");
        }
        
        let newHero = {};
        Object.assign(newHero, currentHero);
        heroesAll.push(newHero);
    }

    let jsonResult = JSON.stringify(heroesAll);
    console.log(jsonResult);
}

heroInventory(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
