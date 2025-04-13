let form = document.querySelector("#form");
let ul = document.querySelector("#list_item");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.querySelector("#username").value; 
  let message = document.querySelector("#message").value; 
  const newLi = document.createElement("li");
    newLi.textContent = username + ":" + message;


  ul.append(newLi);
  console.log("Da submit thanh cong");
    form.reset();
});

//Xoa phan tu li khi click vao

// const list_li = document.querySelectorAll("li");
// list_li.forEach((li_item) =>{
//     li_item.addEventListener("click", function(){
//         li_item.remove();
//     });
// });
ul.addEventListener("click", function(e){
    const li = e.target;
    
//kiem tra xem the click co phai the li ko
    if(li.tagName === "LI"){
        li.remove();
    }

});


