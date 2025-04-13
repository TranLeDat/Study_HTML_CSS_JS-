// let arrow = () =>{
//     console.log("Hello");
// }

// setTimeout(arrow, 3000);


// setTimeout(function timeout_1(){console.log("hello")}, 3000);

// let inter = function(name){
//     console.log("hello" + name);

// }

// setTimeout(inter, 3000, "Thanh");






// let interval = () =>{
//     console.log("Hello");
// }

// setInterval(interval, 3000);


// let interval1 = function(name){
//     console.log("hello" + name);
// }

// setInterval(interval1, 3000, "Thanh");

function upDateTime(){
    let current = new Date();
    console.log(current);
}
setInterval(upDateTime, 2000);

// let count = 0;
// function setcount(){
//     console.log(count++)
// }
// setInterval(setcount, 2000);

let counter = 0;

let a = () =>{
    console.log(counter++);
    if(counter === 5){
        clearInterval(stopInterval);
    }
}

let stopInterval = setInterval(a, 2000);
