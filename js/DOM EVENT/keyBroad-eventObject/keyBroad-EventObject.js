//37.7 keyboard and event Object

let inp = document.querySelector("#inp");
inp.addEventListener("keydown", function(){
    console.log("Keydown");  
});
inp.addEventListener("keyup", function(){
    console.log("Keyup");  
});

//event Object
inp.addEventListener("keyup", function(e){
    console.log(e.key);  
    console.log(e.code);  
});

document.addEventListener("keydown", function(e){
    if(e.code=== "KeyR" ){
        document.body.style.backgroundColor = "chocolate";
    }
});