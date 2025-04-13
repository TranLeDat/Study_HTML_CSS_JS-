// let current = new Date();
// console.log(current);
// console.log(typeof current);

// const year =  current.getFullYear();
// const month = current.getMonth() + 1;
// const date = current.getDate();
// const hour = current.getHours();
// const minute = current.getMinutes();
// const second = current.getSeconds();

// console.log(`Year: ${year}`);
// console.log(`Month: ${month}`); 
// console.log(`Date: ${date}`);
// console.log(`Hour: ${hour}`);
// console.log(`Minute: ${minute}`);
// console.log(`Second: ${second}`);

// const timestap1 = new Date(0);
// console.log(timestap1);



const mydate = new Date(2025, 3, 14);
console.log(mydate);
console.log(mydate.toLocaleDateString());

const mydate1 = new Date("2025-03-14T22:19:14");
console.log(mydate1);

let mydate3 = new Date();
mydate3.setFullYear(2025);
mydate3.setMonth(3);
mydate3.getDay(14);
console.log("here");
let mydate4 = new Date();
console.log(mydate4.toLocaleDateString());
console.log("here");
console.log(mydate3);
console.log(mydate3.toLocaleDateString());


console.log(`${mydate3.getDate()}/${mydate3.getMonth()+1}/${mydate3.getFullYear()}`);


let prefixdate = mydate3.getDate() < 10 ? "0" : "";
let prefixmonth = mydate3.getMonth() < 10 ? "0" : "";
console.log(`${prefixdate}${mydate3.getDate()}/${prefixmonth}${mydate3.getMonth()+1}/${mydate3.getFullYear()}`);