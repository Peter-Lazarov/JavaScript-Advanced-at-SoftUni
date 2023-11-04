(function solve(){
// •	last() - returns the last element of the array
Array.prototype.last = function (){
    return this[this.length-1];
}

// •	skip(n) - returns a new array which includes all original elements, except the first n elements; n is a Number parameter
Array.prototype.skip = function(n) {
    return this.slice(n);
}
// •	take(n) - returns a new array containing the first n elements from the original array; n is a Number parameter
Array.prototype.take = function(n){
    return this.slice(0, n);
}
// •	sum() - returns a sum of all array elements
Array.prototype.sum = function(){
    let sum = 0;
    for (const element of this) {
        sum += element;
    }
    return sum;
}
// •	average() - returns the average of all array elements
Array.prototype.average = function(){
    return this.sum() / this.length;
}
})()

console.log(["proba", "123"].last());
console.log(["proba", "123", "another"].skip(2));
console.log(["proba", "123", "another"].take(0, 2));
console.log([1, 5, 10].sum());
console.log([1, 5, 9].average());
