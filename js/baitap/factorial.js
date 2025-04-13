function firstFactorial(num){
    let gt = 1;
    let expression ="";
    if(num === 0){
         gt = 1;
    }
    else{
        for(let i = num; i >= 1; i--){
            gt*=i;

            if(i === num){
                expression = i.toString();
            }else{
                expression += " * " + i; 
            }
        }
        
    }

    return expression + " = " + gt ;
}

let num = Number(prompt("Nhap n: "));
let result = firstFactorial(num);
console.log(result);