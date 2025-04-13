//1.1Xac dinh phan tu id btn
let btn1 = document.querySelector("#btn");

//1.2 gan su kien click cho btn, su dung function expression

// btn1.onclick = function(){
//     alert('Ban da nhan vao nut button');
// };
    
//1.3dung function declaration khai bao ham, sau do gan ham cho su kien click

// function clickButton(){
//     alert('hover me');
// }

// btn1.onclick = clickButton;



//1.4 dung arrow function 

btn1.onclick = ()=>{
    alert('Click me');
}

//2. 
function mouseOver(){
    document.getElementById("message").textContent = "Bna vau kich hoat mouseOver";
}

function mouseOut(){
    document.querySelector("#message").textContent = "Ban vua kich hoat mouseOut";
    
}

function setup(){
    let button = document.querySelector("#btn2");
    button.onmouseover = mouseOver;
    button.onmouseout = mouseOut;
}




window.onload = setup;