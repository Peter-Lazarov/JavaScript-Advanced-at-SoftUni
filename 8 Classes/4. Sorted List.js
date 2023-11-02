class List {
    constructor(){
        this.collection = [];
        this.size = this.collection.length;
    }

    add(element){
        this.size = this.collection.push(element);
        this.collection.sort((a, b) => a - b);
    }

    get(index){
        if(index < 0 || index > this.collection.length){
            throw new Error("Invalid index");
        }
        return this.collection[index];
    }

    remove(index){
        if(index < 0 || index > this.collection.length){
            throw new Error("Invalid index");
        }
        
        this.collection.splice(index, 1);

        this.size = this.collection.length;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
