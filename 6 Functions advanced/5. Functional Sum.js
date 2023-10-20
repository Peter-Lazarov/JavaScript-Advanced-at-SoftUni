let add = (function (){
    let sum = 0;
    return function addNext(a){
        sum += a;
        addNext.toString = () => sum;
        return addNext;
    }
})();

console.log(add(1)(6)(-3).toString());
