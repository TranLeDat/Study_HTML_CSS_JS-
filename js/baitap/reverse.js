function FirstReverse(str) { 
    let arr = [];
    for(let i = 0; i < str.length; i++){
      arr.push(str[i]);
    }
    arr.reverse();
    str = arr.join("");
    // code goes here  
    return str; 
  
  }
    let str = "cho ngu an cut";
  // keep this function call here 
  console.log(FirstReverse(str));