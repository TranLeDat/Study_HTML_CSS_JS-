// let btn = document.addEventListener("click", function () {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   const rgb = `rgb(${r}, ${g}, ${b})`;
//   let text = document.querySelector("#title");
//   text.innerHTML = rgb;
//   document.body.style.backgroundColor = `${rgb}`;
// });

function changeColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return  `rgb(${r}, ${g}, ${b})`;
}

let btn = document.addEventListener("click", function () {
    
    
    let text = document.querySelector("#title");
    text.innerHTML = changeColor();
    document.body.style.backgroundColor = changeColor();
  });

