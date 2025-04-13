// getAttribute
// const firstLink = document.querySelectorAll("a");
// console.log(firstLink);

// if(firstLink){
//     const linkHref = firstLink.getAttribute("href");
//     console.log(linkHref);
// }else{
//     console.log("Khong tim thay the a");
    
// }

//setAttribute
// firstLink.setAttribute("target", "_blank");


const links = document.querySelectorAll("ul a");
console.log(links);

if(links){
    links.forEach((link) =>{
        link.setAttribute("target", "_blank");
    })
}else{
    console.log("Khong tim thay the a trong ul");
    
}


document.querySelector("h1").setAttribute("style", "color:blue");


const item1 = document.querySelector(".list");
const item2 = document.querySelector("#heading_title");

//hasAttribute
console.log(item1.hasAttribute("class"));
console.log(item2.hasAttribute("style"));

// removeAttribute
item2.removeAttribute("style");
console.log(item2.hasAttribute("style"));

const href_items = document.querySelectorAll("ul a");
href_items.forEach((item) =>{
    item.removeAttribute("href");
})
