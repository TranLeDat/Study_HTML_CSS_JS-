//VD1
// const numbers = [1, 2, 3, 4, 5 ];
// const double = numbers.map((number)=>{ number * 2;
// });

// console.log(double);

//VD2
// const users = [
//     {id: 1, name: "thanh", age: 22 }, 
//     {id: 2, name: "minh", age: 21 }, 
//     {id: 3, name: "luong", age: 23 }
// ];

// const username = users.map((user)=>user.name);

// console.log(username);




//VD3
// const M =[10, 20, 30, 40, 50];

// const result = M.map(function(currentValue,index, arr){
//     console.log(`Index:  ${index}`);
//     console.log(`currentValue:  ${currentValue}`);
//     console.log(`Arr:  ${arr}`);
//     return currentValue/10;
    
// })

// console.log(result);


//VD4 doi so thisAsg

const config =  {
    calculate(value){
        return value*3;
    }
}


const m1 = [1, 2, 3];

const result = m1.map(function(lv){
    return this.calculate(lv);
}, config);

console.log(result);




