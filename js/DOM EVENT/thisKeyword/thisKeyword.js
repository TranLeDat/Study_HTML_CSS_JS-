let buttons = document.querySelectorAll(".btn");
function changeColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
// buttons.forEach((button)=> {
//     button.addEventListener("click", function (){
//         this.style.backgroundColor = changeColor();
//     });
// });

// for(let button of buttons){
//     if(button instanceof HTMLElement){
//         button.addEventListener("click", function(){
//             button.style.backgroundColor = changeColor();
//         });
//     }
// }

let listH1 = document.querySelectorAll(".title");

// listH1.forEach((text) =>{
//     if(text instanceof HTMLElement){
//         text.addEventListener("click", function(){
//             text.style.color = changeColor();
//             text.style.backgroundColor = changeColor();
//         });
//     }
// });

function change(){
    this.style.backgroundColor = changeColor();
    this.style.color = changeColor();
}

for(let button of buttons){
    button.addEventListener("click", change);
}
listH1.forEach((text)=>{
    text.addEventListener("click", change);
});