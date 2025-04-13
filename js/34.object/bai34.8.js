class School{
    constructor(id, name, birthDay){
        this.id = id;
        this.name = name;
        this.birthDay = birthDay;
    } 
    calcAge(current){
        return current - this.birthDay;
    }
}


class Student extends School{
    constructor(id, name, birthDay, major){
        super(id, name, birthDay);
        this.major = major;
    }
    study(){
        console.log(`${this.name} - ${this.major}`);
    }
}

const s1 = new Student("P602", "minh cau", 2003, "Computing");
console.log(s1);
console.log(s1.id);
console.log(s1.birthDay);
console.log(s1.major);
s1.study();


console.log(s1.calcAge(2025));

