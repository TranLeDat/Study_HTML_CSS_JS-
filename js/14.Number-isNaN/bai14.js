// ham Number isNaN

var str =  "123";
var num = Number(str);
console.log(`num, kieu du lieu ${typeof num}`);

var invalidStr = "abc";
var invalidNum = Number(invalidStr);
console.log(invalidNum);


let a = "123a";
console.log(isNaN(a));

let b = Number(true);
console.log(b);
console.log(typeof b);
console.log(isNaN(b));
console.log(Number(""));
console.log(Number(" "));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc" / "bcd"));
console.log("abc" / "bcd");
console.log(0 / 0);