// // // // let s1 = "apple , orange, banana, kiwi";
// // // // // let s2 = s1.split(",");
// // // // // console.log(s1.split(","));
// // // // let s2 = s1.split(",", 2);

// // // // console.log(s2);

// // // // let s3 = "abcdefgh";
// // // // let s4 = s3.split("");
// // // // console.log(s4);

// // // //


                                         //dem so ky tu trong chuoi

// // // let s1  = prompt("Nhap chuoi: ");
// // // console.log(s1);
// // // console.log(s1.length);
// // // let count_1 =0;
// // // let count_2 =0;
// // // let count_3 =0;
// // // let count_4 =0;
// // // for(let i = 0;i <= s1.length; i++){

// // //     if(s1[i] === ''){
// // //         count_1++;
// // //     }
// // //     else if(s1[i] >= "0" && s1[i] <= "9"){
// // //         count_2++;
// // //     }else if(s1[i] >= "A" && s1[i] <= "Z"){
// // //         count_3++;
// // //     }
// // //     else{
// // //         count_4++;
// // //     }

// // // }
// // // console.log(`So khoang trang la: ${count_1}`);
// // // console.log(`So chu so la: ${count_2}`);
// // // console.log(`So chu in hoa la: ${count_3}`);
// // // console.log(`So chu in thuong la: ${count_4}`);

                                  //kiem tra mat khau

// // function checkPassword(password) {
// //   if (password.length < 8) {
// //     return false;
// //   } else {
// //     for (let i = 0; i < password.length; i++) {
// //       if (password[i] <= "0" && password[i] >= "9") {
// //         return false;
// //       } else if (password[i] <= "A" && password[i] >= "Z") {
// //         return false;
// //       } else if (password[i] <= "a" && password[i] >= "z") {
// //         return false;
// //       }
// //     }
// //   }
// //   return true;
// // }

// // let password = prompt("Nhap mat khau: ");

// // let count = 0;
// // while (checkPassword(password)) {
// //   password = prompt("Nhap lai mat khau: ");
// //   count++;
// //   if (count === 3) {
// //     alert("Ban da nhap sai qua 3 lan");
// //     break;
// //   }
// // }
// // console.log(password);



                                      //ma hoa chuoi
// function encrynt(mess){
//     const a = "abcdefghijklmnopqrstuvwxyz";
//     const b = "zyxvutsrqponmlkjihgfedcba";
//     let result = "";
//     for(let i = 0; i < mess.length(); i ++){
//         let char = mess[i].toLowerCase();
//         if(a.includes(char)){
//             let index = a.indexOf(char);
//             result += b[index];
//         }else{
//             result += char;
//         }
//     }
//     return result;
// }


// let mess = prompt("Nhap chuoi: ");
// console.log(mess);
// let kq =  encrynt(mess);
// console.log(kq);

                                // dem chu xuat hien trong chuoi
// function count_text(text){                 
// function count_text(text){
//     let count =0;
//     let arr = text.split(" ");
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] === "toi"){
//             count++;
//         }
//     }
//     return count;
// }

// let text = "toi se co gang toi se cham chi toi se lam duoc";
// let kq = count_text(text);
// console.log(kq);

                                 //tach Chuoi
function split_text(text){
    let arr ="";
    let result_1 = "";
    let result_2 = "";
    for(let i =0; i < text.length; i++){
        let char = text[i];
        if(char >= "0" && char <= "9"){
            result_1 += char;
        }else if(char >= "a" && char <= "z"){
            result_2 += char;
        }else{
            arr += char;
        }   
    }
    return result_1 + "-" + result_2;
}

let text = "n1g2uye3n";
let kq = split_text(text);
console.log(kq);





