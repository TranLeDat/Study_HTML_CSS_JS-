// 7.Cach xuat du lieu voi bien trong js

let soA = 25;
let soB = 5;

//cach 1:

console.log("Can bac 2 cua soA " + soA + " la: " + soB);

 //Cach 2: 
console.log("Can bac 2 cua soA" , soA , "la:" , soB);

//Cach 3: 
console.log(`Can bac 2 cua ${soA} la: ${soB}` );

// Cach 4:
console.log(`Can bac 2 cua %s la: %s `, soA, soB);



let a =4, b = 3, kq = a+b;

console.log("Ket qua cua so a: "  + a + "voi so b: " + b + " la: " + kq);
console.log("Ket qua cua so a: "  , a , "voi so b: " , b,  " la: " , kq);
console.log(`Ket qua cua so a: ${a} voi so b: ${b} la: ${kq}`);
console.log(`ket qua cua so a: %s voi so b: %s la %s`, a, b, kq);
