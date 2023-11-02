class Stringer{
    constructor(name, length){
        this.innerString = name;
        this.innerLength = length;
    }

    increase(lengthGiven){
        this.innerLength += lengthGiven
        return this.innerLength;
    }

    decrease(lengthGiven){
        if(this.innerLength - lengthGiven < 0){
            this.innerLength = 0;
        }else{
            this.innerLength -= lengthGiven;
        }
        return this.innerLength;
    }

    toString(){
        let stringLength = this.innerString.length;
        if(stringLength > this.innerLength){
            return this.innerString.substring(0, this.innerLength) + "...";
        }else{
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
