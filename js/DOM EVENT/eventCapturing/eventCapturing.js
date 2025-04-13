const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener("click", function () {
//   console.log("child clicked");
// }, {capture : true});

// parent.addEventListener("click", function () {
//   console.log("parent clicked");
// }, {capture : true});

// grandparent.addEventListener("click", function () {
//   console.log("grandparent clicked");
// }, {capture : true});



child.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    console.log("child clicked");
  });
  
  parent.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("parent clicked");
  });
  
  grandparent.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("grandparent clicked");
  });

  child.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("child clicked 2");
  });
  

