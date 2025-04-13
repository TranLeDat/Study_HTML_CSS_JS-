let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arrA = arr1.concat(arr2);
console.log(arrA);

arr1.push(8);
console.log(arr1);

arr1.unshift(3);
console.log(arr1);

arr1.pop();
console.log(arr1);

let arr3 = arr1.slice(1, 3);
console.log(arr3);

let check = arr3.includes(2);
console.log(check);

let arr5 = [1, 2, 3, 4, 5, 3, 6];
let arr6 = arr5.slice().reverse();
console.log(arr6);

arr5.splice(3, 2, 5, 5);
console.log(arr5);