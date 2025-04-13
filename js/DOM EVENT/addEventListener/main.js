// Lay phan tu

let btn3 = document.querySelector("#btn3");

// them su kien

//su dung ham expression
// btn3.addEventListener('click', function (){
//     alert('toi buon ngu qua');
// });

//Su dung function declaration
function message(){
    alert('Toi muon di ngu ngay lap tuc');
}
btn3.addEventListener('click',message);


//su dung arrow function
btn3.addEventListener("click", ()=>{
    alert('bay gio ma ngu la sau nay se kho');
});

//So sach voi level 0 event handling

let btn4 = document.querySelector("#btn4");

function event1() {
    alert('Chay su kien 1');
}
function event2() {
    alert('Chay su kien 2');
}


btn4.addEventListener('click',event1, {once:true });
btn4.addEventListener('click',event2);

// btn4.onclick = event1;
// btn4.onclick = event2;

// co the xoa su kien
// btn4.removeEventListener("click", event1);


//su li su kien voi tham so t3 option
