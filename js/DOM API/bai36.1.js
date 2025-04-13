//Document Object Model
console.log("getElementsByTagName: ");
let li_item = document.getElementsByTagName("li");
console.log(li_item);

//Truy xuat vaf thay doi phan tu theo index
li_item[1].innerHTML = "home";

console.log("getElementsByClassName: ");
let li_item_class = document.getElementsByClassName("list");
console.log(li_item_class);
li_item_class[2].innerHTML = "thanh";


console.log("getElementsById: ");
let li_id = document.getElementById("list_id");
console.log(li_id);
li_id.innerHTML =  "da chinh sua"

// bai tap
const img = document.createElement("img");

img.src = "../../img/hinh-nen-hoa-la.jpg";

document.body.append(img);

const text1 = document.createElement("p");
const text2 = document.createElement("p");

let id_first = document.querySelector("#thanh");
text1.textContent = "thanh bai duoi";
text2.textContent = "bai sai duoi";

id_first.append(text1);
id_first.prepend(text2);


text1.style.color = "red";
text1.style.fontSize = "46px";

Object.assign(text2.style, {
    backgroundColor : "chocolate",
    "color" : "red",
    fontSize : "50px"

})


let elm = document.getElementById("thanh");

elm.classList.add("myClass");
console.log(elm.classList.contains("myClass"));

let checkbox = document.querySelector("input");
if(checkbox.checked = true ) {
    elm.classList.replace("myClass", "act");

}







