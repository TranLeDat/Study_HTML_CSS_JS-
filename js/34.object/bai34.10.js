class School{
    constructor(id, name, birthYear, score){
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
        this._score = score;  // quy uoc thuoc tinh protect
    }

    calcAge(current){
        return current - this.birthYear;
    }

    //ham getter cho thuoc tinh score
    get getScore(){
        return this._score;
    }
    //ham setter cho thuoc tinh score
    set setScore(value){
        //co the them cac bieu thuc logic de kiem tra
        if(value >=0 && value <= 100){
            this._score = value;
        }else{
            console.log("Diem so khong hop le");
            
        }
    }
}

const student = new School("p602", "Thanh ngu", 2003, 99);

console.log(student.id);
console.log(student.name);
console.log(student.birthYear);
// console.log(student._score); // khong nen truy cap truc tiep

console.log(student.calcAge(2025));

console.log(student.getScore);

student.setScore = 96;
console.log(student.getScore);



class Sucvat{
    constructor(id, name, address, species){
        this.id = id;
        this.name = name;
        this.address = address;
        this.species = species;
    }
    showSv(){
        console.log(`${this.id} ${this.name} ${this.address} ${this.species}`);
    }

    get setId(){
        return this.id;
    }
    set setId(id){
        this.id = id;
    }

    get getName(){
        return this.name;
    }
    set setName(name){
        this.name = name
    } 

    get getAddress(){
        return this.address;
    }
    set setAddress(address){
        this.address = address;
    }

    get getSpecies(){
        return this.species;
        
    }
    set setSpecies(species){
        this.species = species;
    }
}

const sv1 = new Sucvat();

sv1.setId = 19;
sv1.setName = "thanh ngu";
sv1.setAddress = "lao cai";
sv1.setSpecies = "cho";

// console.log();
sv1.showSv();
console.log(sv1.getSpecies);





