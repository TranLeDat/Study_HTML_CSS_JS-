// let arr = [];
// let n;

// while(true){
//     n = Number(prompt("Nhap vao so phan tu "));
//     if(Number.isInteger(n) && n > 0){
//         break;
//     }

// }
// for(let i =0; i < n; i++){
//     arr[i] = Number(prompt("Nhap phan tu thu " + i + ": "));

// }

// console.log(arr);


// bai 2

let arr = [];
let n;

while(true){
    n = Number(prompt("Nhap so phan tu: "));
    if(Number.isInteger(n) || n > 0){
        break;
    }
}

for(let i =0; i < n; i++){
    arr.push(Math.floor(Math.random() * 100));
    i++
}

console.log(arr);
let arrReverse = arr.reverse();
console.log("Ham dao nguoc: " + arrReverse);

let arrSort = arr.slice();
console.log(arrSort.sort());


let sum = 0;
for(let i =0; i < arr.length; i ++){
    sum+=arr[i];
}
console.log(sum);


let x = Number(prompt("Nhap so de tim: "));



console.log(arr.includes(x));
for(let i =0; i < arr.length; i++){
    if(arr[i] === x){
        console.log(i);
    }
}