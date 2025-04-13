//Query Selector

let title = document.querySelector("#heading_title");
console.log(title);
title.innerHTML = "bi sao vay troi";
// console.log(title);

let list_item = document.querySelector(".list");
console.log(list_item);
list_item.innerHTML =  "than ngu";

let firstLinkInList = document.querySelector("ul a");
console.log(firstLinkInList); // tra ve null (do da thay doi the list dau tien trc do)

let checkbox = document.querySelector("input");
checkbox.checked = true;

let li_item = document.querySelectorAll("li");
console.log(li_item);
li_item[2].innerHTML = "thanh an cut";



 



