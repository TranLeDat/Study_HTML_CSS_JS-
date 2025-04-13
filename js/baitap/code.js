
// function strStr(haystack, needle) {
//     return haystack.indexOf(needle);

//  };
//  let haystack = "sadboy";
//  let needle = "sad";
// let result = strStr(haystack, needle);
//  console.log(result);




// function printS(str){
//     let ar  = str.split(' ');
//     let arr1 = ar[0];
//     let arr2 = ar[1];
//     let arr ="";
//     for(let i =0; i < arr1.length; i ++){
//         if (arr1[i] === "0" &&  arr2[i] === "0"){
//             arr += "0";

//         }else{
//             arr += "1";
//         } 
//     }
//     return arr; 
// }

// let str = "1100 1001";

// let result = printS(str);

// console.log(result);


function checkPalindrome(str){
    str = str.toLowerCase().replace(/[a-z0-9]/g, '');
    let left = 0;
    let right = str.length -1;

    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(checkPalindrome("hello"));





