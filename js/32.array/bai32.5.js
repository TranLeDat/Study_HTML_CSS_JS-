let arr = [1, 2, 3];
let sum = 0;
for(let element of arr){
    sum +=element;
}

console.log(sum);


let sum2 = arr.reduce(
    (accumulator, currentValue, currentIndex, array) =>{
        return accumulator + currentValue;
    },
    0
);
 
console.log(sum2);