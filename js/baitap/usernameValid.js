function CodelandUsernameValidation(str) { 
    if(str.length < 4 || str.length > 25)
        return "false";
    if(!/[a-zA-Z]/.test(str[0])){
        return "false";
    }
    if(!/^[a-zA-Z0-9_]+$/.test(str)){
        return "false";
    }
    if(str[str.length - 1] === "_"){
        return "false";
    }
    return "true";    
}
     
  // keep this function call here 
let str = "u__hello_world12_";
console.log(CodelandUsernameValidation(str));