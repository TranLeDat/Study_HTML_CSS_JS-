let arr1 = [1, 2, 3];

let arr2 = [...arr1];
arr2[1] = 99;
console.log("M1 " + arr1);
console.log("M2 " + arr2);

function sum(a, b, c){
    return a + b + c;
}

let s = [1, 2, 3];
let tong = sum(...s);
console.log(tong);

let arrA = [...arr1, ...arr2];
console.log(arrA);

let arr4 = [...arr1, 4];
console.log(arr4);


let name = "thanhngu";
let arr5 = [...name];
console.log(arr5);