
// let yob = function(year){
    
//     let current = new Date(2025);
//     // current.getFullYear(2025);

//     let age = current - year;
//     return age;

// }

// let year = Number(prompt("Nhap nam sinh:"));
// while(year < 0 || !Number.isInteger(year) ){

//     alert("Nhap lai: ");
//     year = Number(prompt("Nhap nam sinh: "));
//     console.log(year);
// }


// let result = yob(year);
// console.log(result);


function countdown(minute){
    alert("Lam bai trong " + minute + "phut");
    let seconds = minute * 60;
    
    let countdownInterval = setInterval(function(){
        let minuteLeft = Math.floor(seconds/ 60);
        let secondsFelt = seconds % 60;
        let prefixSeconds = secondsFelt < 10 ? 0 : "";
        console.log(`${minuteLeft}:${prefixSeconds}${secondsFelt}`);
        if (seconds <= 0){
            clearInterval(countdownInterval);
            alert("Het thoi gian");
        }else{
            seconds --;
        }
    }, 1000)
}


let inputTime = Number(prompt("Nhap thoi gian dem nguoc: "));
// while(inputTime < 0 || !Number.isInteger(inputTime)){
//     alert("Nhap lai: ");
//     inputTime = Number(prompt("Nhap lai thoi gian"));
// }

countdown(inputTime);




