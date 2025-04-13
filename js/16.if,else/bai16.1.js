//16.If else trong JS
//Xuat thong bao cho nguoi dung nhap diem


// let dtb = parseFloat(prompt("Moi ban hap diem: "));
// console.log(`Diem ban vua nhap la: ${dtb}`);
// if(dtb >= 5){
//     console.log("Ban da do");
// }else{
//     console.log("Ban da truot");
// }



// 16.2 if else if else 

let score = Number(prompt("Nhap diem:")) ;
//kiem tra dieu kien

if(score <=10 && score >= 8){
    console.log("Xin chuc mung ban dat duoc gioi !");
}else if(score <= 8 && score >=6.5){
    console.log("Ban da dat duoc kha!");
}else if(score <= 6.5 && score >=5){
    console.log("Ban da dat duoc trung binh!");
}else if(score < 5 && score >= 0){
    console.log("ban da dat dc hc luc kem");
}else{
    console.log("Ban da nhap diem sai!");
}
















