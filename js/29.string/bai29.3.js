// let s1 = prompt("Nhap chuoi: ");
let s1 = "hoc hoc nua hoc mai";
console.log(s1);
// console.log(s1.replace("troi", "ngu"));

console.log(s1.replace(/hoc/g, "ngu"));

let s2 = "hoc ";
console.log(s2.repeat(5));


let s3 = "hoc hoc nua hoc mai";
console.log(s3.indexOf("h"));
console.log(s3.indexOf("g", 2));
console.log(s3.lastIndexOf("h"));
console.log(s3.lastIndexOf("h", 7));

console.log(s3.includes("g"));
console.log(s3.includes("n",9));

console.log(s3.startsWith("h"));
console.log(s3.startsWith("h", 1));
console.log(s3.endsWith("h"));
console.log(s3.endsWith("h", 5));

s4 = "nhac.mp3";
console.log(s4.endsWith(".mp3"));



