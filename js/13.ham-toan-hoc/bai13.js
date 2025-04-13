//13.Ham toan hoc
//1.Ham Math.sqrt()
let soA = 25;
let soB = Math.sqrt(soA);
console.log(`Can bac 2 cua ${soA} la:  ${soB}`);

//2.Ham Math.pow(base, exponent)
let soC = 2;
let soD = 3;
let result =  Math.pow(soC, soD);
console.log(`${soC} mu ${soD} la: ${result}`);

// 3.Ham Math.abs()
let soE = -10;
let abssoluteValue = Math.abs(soE);
console.log(`Gia tri tuyet doi cua so ${soE} la: ${abssoluteValue}`);

//4.Lam tron x chu so phan don vi
let pi = 3.14159;
console.log(pi.toFixed(2)) //Ket qua se tra ve kieu string
console.log(parseFloat(pi.toFixed(2)));

//5.Ham Math.min() va max()
let num1 = 1;
let num2 = 2;
let num3 = 3;
let minValue = Math.min(num1, num2, num3);
let maxValue = Math.max(num1, num2, num3);
console.log(`Gia tri lon nhat ${maxValue} gia tri nho nhat ${minValue}`);

