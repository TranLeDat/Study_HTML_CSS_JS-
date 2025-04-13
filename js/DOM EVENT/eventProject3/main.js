const progress = document.getElementById("progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const steps = document.querySelectorAll(".step");
let currentAct = 1; //khoi tao gia tri ban dau

function changeStep(step) {
  currentAct += step;
  update();
}

function update() {
  steps.forEach((step, idx) => {
    if (idx < currentAct) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  //bat tat cac nut Prev/next dua vao currentActive
  prev.disabled =currentAct ===1;
  next.disabled =currentAct === steps.length;

  //Cap nhat chieu rong thanh tien trinh
  progress.style.width = ((currentAct - 1) / (steps.length - 1)) *100 +"%";
}




//sk next
next.addEventListener("click", function () {
  changeStep(1); //tang len 1
});

//sk prev
prev.addEventListener("click", function () {
  changeStep(-1); //giam xuong 1
});
