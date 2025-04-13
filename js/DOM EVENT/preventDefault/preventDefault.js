const form = document.querySelector("#login");
const userName = document.querySelector("#name");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn hành vi mặc định (gửi form)
  console.log(userName.value);
  let text = document.createElement("li");
  text.textContent = userName.value;
  let lists = document.querySelector("#list");
  lists.appendChild(text);  
  userName.value = "";

});

const item_a = document.querySelector("a");
item_a.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Ngan chan the a");
    
});


