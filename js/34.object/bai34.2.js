let person = {
    name: "thanh",
    age: "22",

};

let keys = Object.keys(person);
console.log(keys);
let values = Object.values(person);
console.log(values);

let entries = Object.entries(person);
console.log(entries);


let target = {c:3};
let source1 = {a:1};
let source2 = {b:2};

Object.assign(target, source1, source2);
console.log(target);

let target2 = {...source1, ...source2};
console.log(target2);



 console.log(person.hasOwnProperty("name"));
 console.log(person.hasOwnProperty("job"));

let person2 = {name:"Thanh", age:22};
Object.freeze(person2);

person2.name = "cau";
person2.job = "it";
delete person2.age;

console.log(person2);

let person3 = {name : "minh", age: 22};

Object.seal(person3);

person3.job = "cho";
person3.name = "cau";
delete person3.age;

console.log(person3);

 
 

