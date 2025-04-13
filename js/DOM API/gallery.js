//src: https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png


let container = document.querySelector("#container");
let baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

//Bai toan 1
// let item = document.createElement("img");
// item.src = `${baseUrl}1.png`;
// container.append(item);


//Bai toan 2 them 151 anh vao container
// for(let i =1 ; i < 151; i++){
//     let itemImg = document.createElement("img");
//     itemImg.src =`${baseUrl}${i}.png`;
//     container.appendChild(itemImg);
// }

//Bai toan 3

// let item_img = function(){
//     for(let i =1 ; i < 151; i++){
//         let itemImg = document.createElement("img");
//         itemImg.src =`${baseUrl}${i}.png`;
//     }
// }
for(let i =1; i <= 150; i++){
    let div_item = document.createElement("div");
    const parentDiv = container.appendChild(div_item);
    
    
    let itemImg = document.createElement("img");
    itemImg.src =`${baseUrl}${i}.png`;
    parentDiv.appendChild(itemImg);

    const newSpan = document.createElement("span");
    newSpan.textContent = `#${i}`;
    parentDiv.appendChild(newSpan);



}


