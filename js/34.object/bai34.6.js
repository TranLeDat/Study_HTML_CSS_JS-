class Sinhvien{
    //constructor
    constructor(fullname, id, boy, address){
        this.fullname = fullname;
        this.id = id;
        this.boy = boy;
        this.address = address;
    }


    show(){
        return `${this.fullname} ${this.id} ${this.boy} ${this.address}`;
    }
    getAge(current){
        return current - this.boy;
        ;
    }
}


const sv1 = new Sinhvien("thanh ngu", 19, 2003, "lao cai");

console.log(sv1);
// console.log(sv1.getAge());
console.log(Object.getPrototypeOf(sv1));
console.log(Object.getPrototypeOf(sv1) === Sinhvien.prototype);

// Sinhvien.prototype.getAge = function(current){
//     return current - this.boy;
// }

// sv1.getAge();
console.log(sv1.getAge(2025));
console.log(sv1);


