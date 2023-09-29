function rectangle(width, height, color){

    let rectangleObject = {
        width: width,
        height: height,
        color: color.charAt(0).toUpperCase() + color.slice(1),

        calcArea(){
            return width * height;
        }
    }

    return rectangleObject;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
