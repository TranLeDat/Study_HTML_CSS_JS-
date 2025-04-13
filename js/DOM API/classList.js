let element = document.getElementById("myElement");

//1.classList.add()
element.classList.add("newClass");

//2.classList.contains()
console.log(element.classList.contains("newClass"));
console.log(element.classList.contains("mClass"));

//3.classList.remove()
element.classList.remove("myClass");
console.log(element.classList.contains("newClass"));

//4.classList.replace()
element.classList.replace("newClass", "abc");
console.log(element.classList.contains("newClass"));

//5.classList.toggle()
element.classList.toggle("toggleClass");
// element.classList.toggle("toggleClass");


//6.classList

console.log(element.classList);
