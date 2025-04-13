class Circle{
    constructor(radius){
        this.radius = radius;
     }

     //instance method
     show(){
        console.log(`phuong thuc show dc goi`);
     }

     //static method
     static calcArea(radius){
        return Math.PI * radius*radius;
     }
}

const c1 = new Circle(10);
const c2 = new Circle(5);

// console.log(c1.show());
// console.log(c2.show());

c1.show();
c2.show();


console.log(Math.floor(Circle.calcArea(10)));
console.log(Math.floor(Circle.calcArea(5)));

