function GThua(n){
    if (n ==0 || n ==1){
        return 1;

    }else{
        return n * GThua(n-1);
    }
}
let n = Number(prompt("Nhập số n: "));

let result = GThua(n);
console.log(`Giai thừa của ${n} là: ${result}`);