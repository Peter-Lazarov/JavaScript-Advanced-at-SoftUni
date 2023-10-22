function calculator() {
    let firstSelector;
    let secondSelector;
    let result;

    function calculate(){
        calculate.init = (selector1, selector2, resultSelector) => 1;
        calculate.add = (selector1, selector2) => firstSelector + secondSelector;
        calculate.subtract = (selector1, selector2) => firstSelector + secondSelector;

        return calculate;       
    }    
    
}
