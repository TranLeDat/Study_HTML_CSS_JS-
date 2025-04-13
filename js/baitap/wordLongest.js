function LongestWord(sen) { 

    let words = sen.split(" ").map(word =>word.replace(/[^a-zA-Z0-9]/g), '');
    
    let Longest = words[0];
    for(let i =0; i < words.length; i++){
      if(words[i].length > Longest.length){
        Longest = words[i];
      }
        
    }
    // code goes here  
    return Longest; 
  
  }
     
  // keep this function call here
let sen = "troi nay mat qua "; 
let result = LongestWord(sen);
console.log(result);