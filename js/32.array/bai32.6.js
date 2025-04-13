let number =[1, 2, 3, 4, 5, 6];

let evenNumber = number.filter(
    (value, index, array) =>value % 2 ==0
);

console.log(evenNumber);