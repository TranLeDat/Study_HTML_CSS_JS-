function QuestionsMarks(str) { 
    let checkPair = false;
    for(let i = 0; i < str.length; i++) {
        if(/[0-9]/.test(str[i])) {
            let firstNum = parseInt(str[i]);

            for(let j = i + 1; j < str.length; j++) { // Sửa i++ thành j++
                if(/[0-9]/.test(str[j])) {
                    let secondNum = parseInt(str[j]);

                    if(firstNum + secondNum === 10) {
                        checkPair = true;

                        let between = str.slice(i + 1, j);
                        let qMarks = (between.match(/\?/g) || []).length;
                        if(qMarks !== 3) {
                            return "false";
                        }
                    }
                    break; // Chỉ kiểm tra số tiếp theo gần nhất
                }
            }
        }
    }
    return checkPair ? "true" : "false"; 
}
     
let str = "acc?7??sss?3rr1??????5";
console.log(QuestionsMarks(str)); // Kết quả: "false"