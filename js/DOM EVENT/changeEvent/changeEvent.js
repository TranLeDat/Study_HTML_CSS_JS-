const inputFrm = document.querySelector("#name");

// inputFrm.addEventListener("change", function(e){
//     console.log(e.target.value);
    
// });


inputFrm.addEventListener("input", function(e){
    console.log(e.target.value);
    const hi = document.querySelector("#hi");
    hi.innerHTML = e.target.value;
});

