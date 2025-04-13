// function Tong(a, b){
//     return a + b;
// }

// let a = Number(prompt("Nhập số a: "));
// let b = Number(prompt("Nhập số b: "));

// let tong = Tong(a, b);
// console.log(`Tổng của ${a} và ${b} là: ${tong}`);


// let tong = function(a, b){
//     return a + b;
// }

// let a = Number(prompt("Nhập số a: "));
// let b = Number(prompt("Nhập số b: "));

// let sum  = tong(a, b);
// console.log(sum);

// let sum = (a, b) => a + b;
// let a = Number(prompt("Nhập số a: "));
// let b = Number(prompt("Nhập số b: "));
// console.log(sum(a, b));


// let abs = (a, b) =>{
//     let prod = a * b;
//     let sum = a + b;
//     return prod + sum;
// }
// console.log(abs(2, 3));


// function sum(a, b){
//     return a + b;
// }

// function prod(a, b){
//     return a * b;
// }

// let tong = (n1, n2 , n3) =>{
//     let cong = sum(n1, n2); 
//     let nhan = prod(cong, n3);
//     return nhan;
// }
// let result = tong(3, 4, 5);
// console.log(result);

function tinhGT(n){
    let gt = 1;
    for(let i=1; i <= n; i++ ){
        gt*=i;
    }
    return gt;
}


let n = Number(prompt("Nhập số n: "));

while (!Number.isInteger(n) || n < 0){
    n = Number(prompt("Nhập lại số n: "));
}

let result = tinhGT(n);
console.log(`Giai thừa của ${n} là: ${result}`);


