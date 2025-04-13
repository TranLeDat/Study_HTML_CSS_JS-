function FindIntersection(strArr){
 
    let arr1 = strArr[0].split(",").map(Number);
    let arr2 = strArr[1].split(",").map(Number);
    let arr = [];
    let i =0; let j =0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            arr.push(arr1[i]);
            i++;
            j++;
        }else if(arr1[i] < arr2[j]){
            i++;
        }else{
            j++;
        }
    }
    return arr;   
}
let strArr =  ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

let result = FindIntersection(strArr);
console.log(result);
