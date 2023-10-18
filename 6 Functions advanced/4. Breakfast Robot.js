function solution() {
    //•	protein={qty} carbohydrate={qty} fat={qty} flavour={qty}
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipeEnumeration = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
            //•	burger - made with 5 carbohydrate, 7 fat and 3 flavour
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
            //•	eggs - made with 5 protein, 1 fat and 1 flavour
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
            //•	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
        }
    };

    function prepare(recipe, quantity) {
        for (let i = 0; i < quantity; i++) {
            let currentProductRecipe = recipeEnumeration[recipe];
            for (let [ingredient, requireQuantity] of Object.entries(currentProductRecipe)) {
                if (store[ingredient] > requireQuantity) {
                    store[ingredient] = store[ingredient] - requireQuantity;
                } else {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }
        }
        return "Success";
    }

    function restock(microelement, quantity) {
        store[microelement] = quantity;
        return "Success";
    }

    function report(){
        return `protein=${store["protein"]} carbohydrate=${store["carbohydrate"]} fat=${store["fat"]} flavour=${store["flavour"]}`
    }

    return function manager(command) {
        let token = command.split(" ");
        let action = token[0];
        switch (action) {
            case "restock": return restock(token[1], Number(token[2]));
                break;
            case "prepare": return prepare(token[1], Number(token[2]));
                break;
            case "report": return report();
                break;
            default: break;
        }
    }
}

let manager = solution(); 
// console.log (manager ("restock flavour 50")); // Success 
// console.log (manager ("prepare lemonade 4")); 

console.log('restock carbohydrate 10');
console.log('restock flavour 10');
console.log('prepare apple 1');
console.log('restock fat 10');
console.log('prepare burger 1');
console.log('report');

