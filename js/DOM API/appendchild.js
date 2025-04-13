let elm = document.querySelector("#header");
const newelm = document.createElement("p");

newelm.textContent = "nay anh anh doi r";
Object.assign(newelm.style, {
    fontSize : "36px",
    color : "chocolate",
})
newelm.setAttribute("class", "myClass");

elm.appendChild(newelm, "anh anh ko them trl");
// elm.append(newelm, "anh anh ko them trl");


console.log(elm.appendChild(newelm));

let btn = document.createElement("button");

btn.textContent = "Click me";

let addedBtn = elm.appendChild(btn);

addedBtn.addEventListener("click", function (){
    alert("Ban vua click nut");
});


let container = document.querySelector("#container");

for(let i =0; i < 100; i++){
    let button   = document.createElement("button");
    button.textContent = "button " +[i+ 1];
    container.appendChild(button);
    if(i % 2 === 1){
        button.style.background = "chocolate";
    }
}








