const button = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");
button.addEventListener("click", function(){
    search.classList.toggle("active");
    input.focus();
})