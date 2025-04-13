let elm = document.getElementById("demo");

//textContent
console.log("textContent: ");
console.log(elm.textContent);

//innerText
console.log("innerText:");
console.log(elm.innerText);

//innerHTML
console.log("innerHTML:");
console.log(elm.innerHTML);


let text = document.getElementById("demo2");

text.innerHTML = "<p><i>Tuhoc.cc</i></p>";
text.textContent = "<p><i>Tuhoc.cc</i></p>";

