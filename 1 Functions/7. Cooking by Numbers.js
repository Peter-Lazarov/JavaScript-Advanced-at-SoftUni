function numberCooking(number, action1, action2, action3, action4, action5) {

    let commandsAll = [];
    commandsAll.push(action1);
    commandsAll.push(action2);
    commandsAll.push(action3);
    commandsAll.push(action4);
    commandsAll.push(action5);

    commandsAll.forEach(element => {
        switch (element) {
            case "chop":
                number /= 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number += 1;
                console.log(number);
                break;
            case "bake":
                number *= 3;
                console.log(number);
                break;
            case "fillet":
                number = number - (number * 0.2);
                console.log(number);
                break;
            default:
                break;
        }
    });
}

//numberCooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
numberCooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

