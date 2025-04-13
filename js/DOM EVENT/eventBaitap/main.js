
let panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    //xoa class active cua cac panel khac
    removeActive();
    //Them class active cho panel duoc click
    panel.classList.add("active");
  });
});


function removeActive(){
    panels.forEach((panel) =>{
        panel.classList.remove("active");
    });
}