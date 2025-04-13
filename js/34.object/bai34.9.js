class Shape{
    constructor(name){
        this.name = name;
    }

    calculateArea(){
        return 0;
    }
}

class Square extends Shape{
    constructor(name, side){
        super(name);
        this.side = side;
    }

    calculateArea(){
        return this.side * this.side;
    }
}

class Rectangle extends Shape{
    constructor(name, width, height){
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(){
        return this.height * this.width;
    }
}
const shape1 = new Square("Shape1", 4);
console.log(shape1.calculateArea());

const shape2 = new Rectangle("Shape2", 6, 7);
console.log(shape2.calculateArea());
