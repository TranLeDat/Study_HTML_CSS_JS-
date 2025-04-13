const person = {
    name : "thanh",
    pet : "minh",
    address : {
        city : "ha noi",
        country : "viet nam",
    },
    boy : 2003,
    scores : [7, 8, 9],

    getAge : function(){
        return 2025 - this.boy;
    },
    getAvg : function(){
        scoreAvg = this.scores.reduce((a, b) => a + b, 0);
        return scoreAvg /3;
    }
};

const Sinhvien = function(fullname, id, birthYear, homeTown){
    this.fullname = fullname;
    this.id = id; 
    this.birthYear = birthYear;
    this.homeTown = homeTown;

    this.show = function(){
        return `${fullname} - ${id} - ${birthYear} - ${homeTown}`;
    }
}


function Student(fullname, id, birthYear, homeTown){
    this.fullname = fullname;
    this.id = id;
    this.birthYear = birthYear;
    this.homeTown = homeTown;

    this.show = function(){
        return `${fullname} - ${id} - ${birthYear} - ${homeTown}`;
    }
}

const sv1 = new Student("thanh", "01", "2003", "lao cai");
const sv2 = new Student("minh", "02", "2003", "nam dinh");

console.log(sv1.fullname);
console.log(sv2.id);

console.log(sv2.show());


//Kiem chung instance

const abc = 1;
console.log(sv1 instanceof Student);
console.log(abc instanceof Student);


sv1.email = "abc@gmail.com";
sv2.fullname = "minh cau";
delete sv2.homeTown;

console.log(sv1);
console.log(sv2);



