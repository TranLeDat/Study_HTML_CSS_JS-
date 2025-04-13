let arr = [3, 4, 6, 2, 1, 9];
let arr2 = ["a", "b", "c"];
arr.sort();

console.log(arr);

for(let element of arr2){
    console.log(`${element.charCodeAt()}`);
}

let arr3 = arr.sort((a, b) => a - b)
console.log(arr3); 


