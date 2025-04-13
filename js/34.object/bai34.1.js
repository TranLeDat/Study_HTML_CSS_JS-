let students = {
  name: "luong",
  boy: 2003,
  address: {
    city: "Ha Noi",
    country: "Viet Nam",
  },
  score: [8, 9, 10],

  getAge: function () {
    return 2024 - this.boy;
  },

  getAge2: function (){
    this.age = 2024 - this.boy;
    return this.age;
  },

  getAvgScore: function () {
    sumScore = this.score.reduce((a, b) => a + b, 0);
    return sumScore / 3;
  },
};

let teacher = {
  "1 number": "Thanh",
};

console.log(students.name);
console.log(students.boy);
console.log(teacher["1 number"]);

let inputKey = "address";
console.log("Truy van den key voi ten bien inputKey: ");

if (students[inputKey]) {
  console.log(students[inputKey]);
} else {
  console.log("inputKey ban nhap khong ton tai");
}

console.log("truy cap phuong thuc");
console.log(students.getAge());
console.log(students.getAvgScore());

students.getAge2();
console.log(students.age);

//Them thuoc tinh moi
students.email= "trandat@gmail.com";
students["website"] = "http//";

console.log(students);

//xoa thuoc tinh
delete students.website;
console.log(students);

students.email = "tranledat@gmail.com";
console.log(students);












