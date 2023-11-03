class Hex{
    constructor(number){
        this.value = number;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        return "0x" + this.value.toString(16).toUpperCase();
    }

    plus(numberGiven){
        let number;
        if(typeof numberGiven == "object"){
            number = numberGiven.valueOf();
        }else{
            number = numberGiven;
        }
        
        return new Hex(this.value + number)
    }

    minus(numberGiven){
        let number;
        if(typeof numberGiven == "object"){
            number = numberGiven.valueOf();
        }else{
            number = numberGiven;
        }

        return new Hex(this.value - number)
    }

    parse(string){
        return parseInt(string, 16);
    }
}

// var decimalNumber = 255; 
// var hexNumber = decimalNumber.toString(16);

// console.log(hexNumber); // ff
// console.log(parseInt("2", 16)); // 2
// console.log(parseInt("35", 16)); // 53
// console.log(parseInt("1f4", 16)); // 500
// console.log(parseInt("7b2", 16)); // 1970
// console.log(parseInt("123abc", 16)); // 1194684

// Write a class Hex, having the following functionality:
// •	The constructor takes one parameter value, which is a number
// •	valueOf() This function should return the value property of the hex class.
// •	toString() This function will show its hexadecimal value starting with "0x"
// •	plus({number}) This function should add a number or Hex object and return a new Hex object.
// •	minus({number}) This function should subtract a number or Hex object and return a new Hex object.
// •	parse({string}) Create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers.

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
