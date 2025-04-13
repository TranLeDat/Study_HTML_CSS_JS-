// let arr = new Array(1, 2, 3, "halu");

// console.log(arr);


// let m = new Array();

// console.log(m);

// //mang M rong nhung duoc ke thua cac thuoc tinh cua cha (array , Object)
// //  nen co the su dung thuoc tinh va phuong thuc cua nguyen mau cha me

// console.log(m.length);
// m.push(5);
// console.log(m);
// console.log(m.toString());


function Student(fullname, id, birthYear, homeTown){
    this.fullname = fullname;
    this.id = id;
    this.birthYear = birthYear;
    this.homeTown = homeTown;

    this.show = function(){
        return `${fullname} - ${id} - ${birthYear} - ${homeTown}`;
    }
}

const sv1 = new Student("thanh", "01", "2003", "lao cai");
const sv2 = new Student("minh", "02", "2003", "nam dinh");


console.log(Object.getPrototypeOf(sv1));
console.log(Student.prototype);

console.log(Object.getPrototypeOf(sv1) === Student.prototype);
console.log(Student.prototype.isPrototypeOf(sv1));

Student.prototype.calcAge = function(){
    console.log(2025 -this.birthYear);
}
Student.prototype.email = "thanhngu@gmail.com";

console.log(sv1);
sv1.calcAge();

console.log(sv1.email);
console.log(sv2.email);

console.log(sv1.hasOwnProperty("email"));
console.log(sv2.hasOwnProperty("fullname"));





